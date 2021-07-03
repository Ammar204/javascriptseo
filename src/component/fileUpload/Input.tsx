import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./style";
import { readString } from "react-papaparse";
import { link, node, rawData } from "../../interface";
import { useAppDispatch } from "../../redux/hooks";
import { UPDATE } from "../../redux/slice/csvRawDataSlice";
import { isAllFileCSV, readFile } from "../../helper/readFileHelper";

interface Props {
  setCsvRawData: (rawData: rawData[]) => void;
}

export function FileUploadInput(props: Props) {
  const { setCsvRawData } = props;
  const classes = useStyles();

  const [fileName, setFileName] = useState<string[]>([]);

  async function changeHandler(evt: any) {
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
    const rawDataArray = await Promise.all(readFilePromises);
    setCsvRawData(rawDataArray.flat());
    setFileName(tempFileName);
  }
  return (
    <label htmlFor="btn-upload" className={classes.uploadInput}>
      <input
        id="btn-upload"
        name="btn-upload"
        style={{ display: "none" }}
        type="file"
        multiple
        onChange={(evt) => changeHandler(evt)}
      />
      <p className={classes.uploadBox}>
        {fileName.length ? fileName.join(", ") : "Upload your csv file"}
      </p>
    </label>
  );
}
