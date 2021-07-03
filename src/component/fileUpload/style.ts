import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    uploadBox: {
      background: theme.palette.background.default,
      fontSize: "14px",
      height: "auto",
      borderRadius: 2,
      position: "relative",
      wordBreak: "break-word",
      minWidth: 100,
      maxWidth: 150,
      padding: "5px 10px"
    },
    uploadInput: {
      flexGrow: 1,
      maxWidth: "300px",
      marginRight: "15px",
      cursor: "pointer",
    },
  })
);
