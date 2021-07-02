import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./style";
import { readString } from "react-papaparse";
import { link, node, rawData } from "../../interface";
import { useAppDispatch } from "../../redux/hooks";
import { UPDATE } from "../../redux/slice/csvRawDataSlice";

export function FileUpload() {
  const classes = useStyles();
  let combineFileData: rawData[] = [];
  let nodes: node[] = [];
  let links: link[] = [];
  const dispatch = useAppDispatch();

  const [fileName, setFileName] = useState<string[]>([]);
  // const [fileName, setFileName] = useState([]);

  function isAllFileCSV(files: FileList): boolean {
    for (let i = 0; i < files.length; i++) {
      if (files[i].name.split(".").pop()?.toLowerCase() !== "csv") {
        return false;
      }
    }
    return true;
  }
  function readFile(file: File): Promise<any[]> {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () {
        const { data } = readString(reader.result as string, { header: true });
        resolve(data);
      };
      reader.readAsBinaryString(file);
    });
  }
  function readFiles(evt: any) {
    const { files } = evt.target;
    const isFilesValid = isAllFileCSV(files);
    if (!isFilesValid) {
      return false;
    }

    let tempFileName: string[] = [];
    let readFilePromises: Promise<any[]>[] = [];
    for (let i = 0; i < files.length; i++) {
      tempFileName.push(files[i].name);
      readFilePromises.push(readFile(files[i]));
    }

    Promise.all(readFilePromises).then((values) => {
      combineFileData = values.flat();
      combineFileData = combineFileData.filter((d) => d.Type === "Hyperlink");
      // .map((d) => ({
      //   Type: d.Type,
      //   Destination: d.Destination,
      //   Source: d.Source,
      // }))
      dispatch(UPDATE(combineFileData));
      // let flags: string[] = [];
      // let nodeId = 0;
      // let sourceHash: Record<string, number> = {}; // out
      // let destinationHash: Record<string, number> = {}; //in
      // combineFileData.forEach((data, idx) => {
      //   if (!flags.includes(data.Destination)) {
      //     nodes.push({
      //       id: nodeId++,
      //       in: 0,
      //       out: 0,
      //       link: data.Destination,
      //     });
      //     flags.push(data.Destination);
      //   }

      //   if (!flags.includes(data.Source)) {
      //     nodes.push({
      //       id: nodeId++,
      //       in: 0,
      //       out: 0,
      //       link: data.Source,
      //     });
      //     flags.push(data.Source);
      //   }

      //   if (!sourceHash[data.Source]) {
      //     sourceHash[data.Source] = 1;
      //   } else {
      //     sourceHash[data.Source]++;
      //   }

      //   if (!destinationHash[data.Destination]) {
      //     destinationHash[data.Destination] = 1;
      //   } else {
      //     destinationHash[data.Destination]++;
      //   }
      // });

      // nodes = nodes.map((node) => ({
      //   id: node.id,
      //   link: node.link,
      //   in: (node.link && destinationHash[node.link]) || 0,
      //   out: (node.link && sourceHash[node?.link]) || 0,
      // }));

      // combineFileData.forEach((data) => {
      //   const sourceNode = nodes.find((node) => node.link === data.Source);
      //   const destinationNode = nodes.find(
      //     (node) => node.link === data.Destination
      //   );

      //   links.push({ source: sourceNode?.id, target: destinationNode?.id });
      // });

      // console.log("promise", nodes, links);
      // setFileName(tempFileName);
    });
  }

  return (
    <div className={classes.uploadContainer}>
      <label htmlFor="btn-upload" className={classes.uploadInput}>
        <input
          id="btn-upload"
          name="btn-upload"
          style={{ display: "none" }}
          type="file"
          multiple
          onChange={(evt) => readFiles(evt)}
        />
        <p className={classes.uploadBox}>
          {fileName.length ? fileName.join(", ") : "Upload your csv file"}
        </p>
      </label>
      <Button variant="contained" color="primary">
        Upload File
      </Button>
    </div>
  );
}
