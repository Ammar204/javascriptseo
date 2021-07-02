import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import { FileUpload } from "../fileUpload/FileUpload";
import './toolbarContent.scss'
export default function ToolbarContent() {
  const classes = useStyles();

  return (
    <div className="toolbar-content-wrapper">
      <Typography variant="h5" noWrap>
        Crawlviz - Internal Link Visualizer
      </Typography>
      <FileUpload />
    </div>
  );
}
