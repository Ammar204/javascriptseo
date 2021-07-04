import { useState } from "react";
import { useStyles } from "./style";
import { rawData } from "../../interface";
import { isAllFileCSV, readFile } from "../../helper/readFileHelper";
import SimpleSnackbar from "../snackbar/Snackbar";

interface Props {
  setCsvRawData: (rawData: rawData[]) => void;
}

export function FileUploadInput(props: Props) {
  const { setCsvRawData } = props;
  const classes = useStyles();

  const [fileName, setFileName] = useState<string[]>([]);
  const [hasError, setError] = useState<boolean>(false);

  async function changeHandler(evt: any) {
    const { files } = evt.target;
    const isFilesValid = isAllFileCSV(files);
    if (!isFilesValid) {
      setError(true)
      setTimeout(() => setError(false), 2000)
      return;
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
    <>
    <label htmlFor="btn-upload" className={classes.uploadInput}>
      <input
        id="btn-upload"
        name="btn-upload"
        style={{ display: "none" }}
        type="file"
        multiple
        onChange={(evt) => changeHandler(evt)}
      />
      <p className={ hasError ?  classes.uploadBoxWithError : classes.uploadBox}>
        {fileName.length ? fileName.join(", ") : "Upload your csv file"}
      </p>
    </label>


    <SimpleSnackbar message="File(s) extension is incorrect" open={hasError} />
    </>
  );
}
