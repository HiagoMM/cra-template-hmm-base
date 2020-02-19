import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import usePrivateHeaderStyles from "./styles";
import { Drawer } from "@material-ui/core";
import SideBar from "../SideBar";
import { useHistory } from "react-router";
import useToggle from "../../utils/useToggle";
import authService from "../../../../core/security/authService";

export default function Header() {
  const [side, toggleSide] = useToggle();

  const classes = usePrivateHeaderStyles();
  const history = useHistory();

  function handleLogout(): void {
    authService.logout();
    history.push("/public");
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => toggleSide()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          TEMPLATE
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={side} onClose={() => toggleSide()}>
        <SideBar />
      </Drawer>
    </AppBar>
  );
}
