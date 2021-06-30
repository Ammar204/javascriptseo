// import { makeStyles } from "@material-ui/core/styles";
// export const useStyles = makeStyles((theme) => ({
//     searchRoot : {
//         background: theme.palette.background.default,
//         minHeight: "100vh",
//         color: theme.palette.text.primary
//     },
//     con



// }));

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    searchRoot : {
        background: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary
    },
    contentWrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems: "center",
        minHeight: "80vh",
        
    }
}))




