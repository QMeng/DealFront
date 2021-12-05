import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  filter: {
    justifyContent: "center",
    display: "flex",
    gap: "1rem",
    paddingTop: "3rem",
    paddingBottom: "1rem",
    font: "helvetica",
  },
  title: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
}));
