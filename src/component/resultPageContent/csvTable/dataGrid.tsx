import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { createStyles, makeStyles } from "@material-ui/styles";
import {
  DataGrid,
  GridColDef,
  GridCellParams,
  isOverflown,
} from "@material-ui/data-grid";
import { rawData } from "../../../interface";
import { useTheme } from "@material-ui/core";
interface GridCellExpandProps {
  value: string;
  width: number;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: "center",
      lineHeight: "24px",
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      "& .cellValue": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  })
);

const GridCellExpand = React.memo(function GridCellExpand(
  props: GridCellExpandProps
) {
  const { width, value } = props;
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current!);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent: KeyboardEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        setShowFullCell(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <div
      ref={wrapper}
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cellDiv}
        style={{
          height: 1,
          width,
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
      <div ref={cellValue} className="cellValue">
        {value}
      </div>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current!.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </div>
  );
});

function renderCellExpand(params: GridCellParams) {
  return (
    <GridCellExpand
      value={params.value ? params.value.toString() : ""}
      width={params.colDef.width}
    />
  );
}
interface Props {
  csvRawData: rawData[];
}

const defaultColumnsFiled = ["Type", "Source", "Destination", "Anchor"];

export default function DataGridDemo(props: Props) {
  const theme = useTheme();
  const { csvRawData } = props;

  let columns: GridColDef[] = defaultColumnsFiled.map((dataField) => ({
    field: dataField,
    headerName: dataField,
    renderCell: renderCellExpand,
    width: 300,
  }));

  const moreColumn: GridColDef[] = Object.keys(csvRawData[0])
    .filter((dataField) => !defaultColumnsFiled.includes(dataField))
    .map((dataField) => ({
      field: dataField,
      headerName: dataField,
      renderCell: renderCellExpand,
      width: 300,
    }));
  // console.log("csvRawData", csvRawData[0]);

  // columns = Object.keys(csvRawData[0]).map((dataField) => ({
  //   field: dataField,
  //   headerName: dataField,
  //   renderCell: renderCellExpand,
  //   width: 300,
  // }));

  columns.push(...moreColumn)

  let csvRawDataWithId = csvRawData.map((d, i) => ({ ...d, id: i }));

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        background: theme.palette.background.default,
      }}
    >
      <DataGrid rows={csvRawDataWithId} columns={columns} />
    </div>
  );
}
