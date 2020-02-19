import React from "react";
import useApontamentosStyles from "./styles";
import { Paper } from "@material-ui/core";

export default function Apontamentos() {
  const styles = useApontamentosStyles();

  return <Paper className={styles.teste}>apontamentos</Paper>;
}
