import React from "react";
import useSideBarStyles from "./styles";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import { useHistory } from "react-router";
export default function SideBar() {
  const styles = useSideBarStyles();
  const history = useHistory();
  const handleNavigate = (path: string) => () => history.push(path);
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Template
        </ListSubheader>
      }
      className={styles.root}
    >
      <ListItem button onClick={handleNavigate("/private/apontamentos")}>
        <ListItemIcon>
          <GraphicEqIcon />
        </ListItemIcon>
        <ListItemText primary="Apontamentos" />
      </ListItem>
    </List>
  );
}
