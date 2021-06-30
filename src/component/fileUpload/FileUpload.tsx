import React from "react";
import {
  Box,
  Typography,
  Button,
  ListItem,
  withStyles,
} from "@material-ui/core";
import {useStyles} from "./style"
export function FileUpload() {
    const classes = useStyles();

  return (
    <div className={classes.uploadContainer}>
      <label htmlFor="btn-upload">
        <input
          id="btn-upload"
          name="btn-upload"
          style={{ display: "none" }}
          type="file"
        />
        <Box className={classes.uploadBox}>Ammar</Box>
      </label>
      <Button variant="contained" color="primary">
        Upload File
      </Button>
    </div>
  );
}
