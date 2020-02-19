import { makeStyles } from "@material-ui/core/styles";

const useLoadingStyles = makeStyles({
  container: {
    width: "100%",
    height: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  progress: {
    width: "60px !important",
    height: "60px !important"
  }
});

export default useLoadingStyles;
