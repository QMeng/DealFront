import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  title: {
    justifyContent: "center",
    display: "flex",
    gap: "1rem",
    paddingTop: "4rem",
    paddingBottom: "1rem",
    font: "helvetica",
  },
}));
