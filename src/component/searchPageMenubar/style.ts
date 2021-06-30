import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(
  (theme): Record<string, any> => ({
    header: {
      backgroundColor: theme.palette.background.default,
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
      padding: "5px 20px",

    },
    drawerContainer: {
      padding: "20px 30px",
    },
    root: {
      flexGrow: 1,
    },
    tool: {
      flexDirection: "row-reverse ",
    },
    iconButton: {
      backgroundColor: "#ff5b30",
      border: "1px solid #ff5b30",
      width: 100,
      height: 25,
      borderRadius: 5,
      marginRight: 15,
      "&:hover": {
        backgroundColor: "#ff5b30",
      },
    },
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      position: "relative",
    },
    toolMob: {
        display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
    },
  })
);
