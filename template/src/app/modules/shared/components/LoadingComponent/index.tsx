import React from "react";
import { CircularProgress } from "@material-ui/core";
import useLoadingStyles from "./styles";

export default function LoadingComponent() {
  const styles = useLoadingStyles();

  return (
    <div className={styles.container}>
      <CircularProgress className={styles.progress} />
    </div>
  );
}
