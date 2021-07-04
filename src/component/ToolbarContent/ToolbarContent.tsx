import React from "react";
import Typography from "@material-ui/core/Typography";
import { FileUpload } from "../fileUpload/FileUpload";
import './toolbarContent.scss'
export default function ToolbarContent() {

  return (
    <div className="toolbar-content-wrapper">
      <Typography variant="h5" noWrap>
        Crawlviz - Internal Link Visualizer
      </Typography>
      <FileUpload />
    </div>
  );
}
