import { makeStyles } from "@material-ui/core/styles";

const useLoginStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    width: "25rem",
    height: "20rem",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  field: {
    display: "flex",
    alignItems: "flex-end"
  },
  icon: {
    fontSize: "2.3rem",
    marginRight: ".5rem",
    marginBottom: 8,
    color: theme.palette.primary.main
  },
  form: {
    width: "95%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  buttonContainer: {
    width: "100%",
    height: "35%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  button: {
    width: "10rem",
    height: "2.5rem"
  }
}));

export default useLoginStyles;
