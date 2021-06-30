import BubbleChart from "@material-ui/icons/BubbleChart";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "./style";
const headersData = [
  {
    label: "Search",
  },

  {
    label: "About",
  },
  {
    label: "FAQ",
  },
];

export default function Header() {
  const { drawerContainer } = useStyles();
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <div className={classes.toolbar}>
        <BubbleChart fontSize="large"  />

        <Toolbar className={classes.tool}>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Search</Button>
        </Toolbar>
      </div>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolMob}>
        <BubbleChart  fontSize="large" />

        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label }) => {
      return (
        <Link
          {...{
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <AppBar className={classes.appBar}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
