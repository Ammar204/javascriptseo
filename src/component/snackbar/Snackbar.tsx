import React from "react";
import Snackbar from "@material-ui/core/Snackbar";


interface Props {
    message: string,
    open: boolean
}


export default function SimpleSnackbar(prop: Props) {
    const {message, open} = prop
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={2000}
        message={message}
      />
    </div>
  );
}
