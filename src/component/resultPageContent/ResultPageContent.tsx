import React from "react";
import Typography from "@material-ui/core/Typography";
import { NetworkGraphJS } from "./networkGrpahJS/NetworkGraph";
import CsvTable from "./csvTable/csvTable";
import { useStyles } from "./style";
import { Paper, useTheme } from "@material-ui/core";
import { useAppSelector } from "../../redux/hooks";
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
        <NetworkGraphJS />
      </Paper>
      <CsvTable />
    </div>
  );

  const renderInitState = () => <div>Ammar</div>;

  return !csvRawData.length ? renderContent() : renderInitState();
}
