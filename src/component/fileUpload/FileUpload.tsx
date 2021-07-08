import { Button } from "@material-ui/core";
import { useStyles } from "./style";
import { rawData } from "../../interface";
import { useAppDispatch } from "../../redux/hooks";
import { UPDATE } from "../../redux/slice/csvRawDataSlice";
import { FileUploadInput } from "./Input";

export function FileUpload() {
  const classes = useStyles();
  let combineFileData: rawData[] = [];
  const dispatch = useAppDispatch();

  function setCsvRawData(rawData: rawData[]) {
    combineFileData = [...rawData];
    // combineFileData = combineFileData.filter((d) => d.Type === "Hyperlink");
  }

  function uploadHandler() {
    dispatch(UPDATE(combineFileData));
  }

  return (
    <div className={classes.uploadContainer}>
      <FileUploadInput setCsvRawData={setCsvRawData} />
      <Button variant="contained" className={classes.btn} color="primary" onClick={uploadHandler}>
        Upload File
      </Button>
    </div>
  );
}
