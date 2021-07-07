import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      "@media (max-width: 500px)": {
        flexDirection: "column",
        width : "100%",
        marginRight: "24px",
        marginBottom: "16px"
      },
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
      padding: "5px 10px",
      "@media (max-width: 500px)": {
        width: "100%",
        minWidth: "100%",

      },
    },
    btn: {
      "@media (max-width: 500px)": {
        width: "100%",
      },
    },
    uploadInput: {
      flexGrow: 1,
      maxWidth: "300px",
      marginRight: "15px",
      cursor: "pointer",
      "@media (max-width: 500px)": {
        marginRight: "0px",
        width: "100%"

      },
    },
    uploadBoxWithError: {
      background: theme.palette.background.default,
      fontSize: "14px",
      height: "auto",
      borderRadius: 2,
      position: "relative",
      wordBreak: "break-word",
      minWidth: 100,
      maxWidth: 150,
      padding: "5px 10px",
      border: `1px solid ${theme.palette.error.light}`
    },
  })
);
