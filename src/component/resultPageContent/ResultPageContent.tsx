import { NetworkGraphJS } from "./networkGrpahJS/NetworkGraph";
import { useStyles } from "./style";
import { Paper, useTheme } from "@material-ui/core";
import { useAppSelector } from "../../redux/hooks";
import DataGridDemo from "./csvTable/dataGrid";
export default function ResultPageContent() {
  const classes = useStyles();
  const theme = useTheme();

  const csvRawData = useAppSelector((state) => state.csvRawDataReducer);

  const renderContent = () => (
    <div>
      <Paper
        style={{
          width: "100%",
          background: theme.palette.background.default,
          marginBottom: "50px",
        }}
        className={classes.root}
      >
        <NetworkGraphJS csvRawData={csvRawData} />
      </Paper>
      <DataGridDemo  csvRawData={csvRawData} />
    </div>
  );

  const renderInitState = () => <div></div>;

  return !!csvRawData.length ? renderContent() : renderInitState();
}
