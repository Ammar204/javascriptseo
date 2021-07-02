import { Button } from '@material-ui/core';
import React, { Component } from 'react'; // let's also import Component
import { readString } from 'react-papaparse';
import { rawData, node, link } from '../../interface';
// import { useStyles } from "./style";

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
type state = {
    fileName?: string[]
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
// classes = useStyles();

export class FileUploadClass extends Component<{}, state> {

     combineFileData: rawData[] = [];
     nodes: node[] = [];
     links: link[] = [];


     isAllFileCSV(files: FileList): boolean  {
        for (let i = 0; i < files.length; i++) {
          if (files[i].name.split(".").pop()?.toLowerCase() !== "csv") {
            return false;
          }
        }
        return true;
      };
       readFile (file: File): Promise<any[]> {
        return new Promise(function (resolve, reject) {
          const reader = new FileReader();
          reader.onload = function () {
            const { data } = readString(reader.result as string, { header: true });
            resolve(data);
          };
          reader.readAsBinaryString(file);
        });
      };
       readFiles (evt: any)  {
        debugger
        const { files } = evt.target;
        const isFilesValid = this.isAllFileCSV(files);
        if (!isFilesValid) {
          return false;
        }
    
        let tempFileName: string[] = [];
        let readFilePromises: Promise<any[]>[] = [];
        for (let i = 0; i < files.length; i++) {
          tempFileName.push(files[i].name);
          readFilePromises.push(this.readFile(files[i]));
        }
    
        Promise.all(readFilePromises).then((values) => {
          this.combineFileData = values.flat();
          this.combineFileData = this.combineFileData
            .filter((d) => d.Type === "Hyperlink")
            .map((d) => ({
              Type: d.Type,
              Destination: d.Destination,
              Source: d.Source,
            }));
    
          let flags: string[] = [];
          let nodeId = 0;
          let sourceHash: Record<string, number> = {}; // out
          let destinationHash: Record<string, number> = {}; //in
          this.combineFileData.forEach((data, idx) => {
            if (!flags.includes(data.Destination)) {
              this.nodes.push({
                id: nodeId++,
                in: 0,
                out: 0,
                link: data.Destination,
              });
              flags.push(data.Destination);
            }
    
            if (!flags.includes(data.Source)) {
              this.nodes.push({
                id: nodeId++,
                in: 0,
                out: 0,
                link: data.Source,
              });
              flags.push(data.Source);
            }
    
            if (!sourceHash[data.Source]) {
              sourceHash[data.Source] = 1;
            } else {
              sourceHash[data.Source]++;
            }
    
            if (!destinationHash[data.Destination]) {
              destinationHash[data.Destination] = 1;
            } else {
              destinationHash[data.Destination]++;
            }
          });
    
          this.nodes = this.nodes.map((node) => ({
            id: node.id,
            link: node.link,
            in: (node.link && destinationHash[node.link]) || 0,
            out: (node.link && sourceHash[node?.link]) || 0,
          }));
    
          this.combineFileData.forEach((data) => {
            const sourceNode = this.nodes.find((node) => node.link === data.Source);
            const destinationNode = this.nodes.find(
              (node) => node.link === data.Destination
            );
    
            this.links.push({ source: sourceNode?.id, target: destinationNode?.id });
          });
    
          console.log("promise", this.nodes, this.links);
          this.setState({fileName: tempFileName})
        });
      };

  // render will know everything!
  render() {
    return (
        <div >
      <label htmlFor="btn-upload" >
        <input
          id="btn-upload"
          name="btn-upload"
          style={{ display: "none" }}
          type="file"
          multiple
          onChange={(evt) => this.readFiles(evt)}
        />
        <p >
          a
        </p>
      </label>
      <Button variant="contained" color="primary">
        Upload File
      </Button>

      <div>
      {this.state?.fileName?.length ? this.state.fileName.join(", ") : "Upload your csv file"}
      </div>
    </div>
    )
  }
}