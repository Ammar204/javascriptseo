import { Typography } from "@material-ui/core";
import React from "react";
import { FileUpload } from "../../component/fileUpload/FileUpload";
import { SearchPageFooter } from "../../component/searchPageFooter/SearchPageFooter";
import SearchPageMenubar from "../../component/searchPageMenubar/SearchPageMenubar";
import { useStyles } from "./style";
function App() {
  const classes = useStyles();

  return (
    <div className={classes.searchRoot}>
      <SearchPageMenubar />

      <div className={classes.contentWrapper}>
        <Typography variant="h4" gutterBottom>
          Title
        </Typography>
        <Typography variant="body1" gutterBottom>
          Some tagline or small description
        </Typography>
        <FileUpload />
      </div>

      <SearchPageFooter />
    </div>
  );
}

export default App;
