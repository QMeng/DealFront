import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        height: '100%',
        fontFamily: "Fira Sans",
      },
      media: {
        height: 0,
        paddingTop: '100%',
      },
      cardRoot: {
        paddingLeft: "15px",
        paddingRight: "15px",
        fontFamily: "inherit"
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "inherit"
      },
      prices: {
        display: "flex",
        gap: "3px",
        fontFamily: "inherit"
      },
      orgPrice: {
        paddingLeft: "8px",
        textDecoration: "line-through",
        color: "gray",
        fontFamily: "inherit"
      },
      curPrice: {
        color: "red",
        fontFamily: "inherit"
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        fontFamily: "inherit"
      },
      title: {
        fontFamily: "inherit"
      },
      source: {
        fontFamily: "inherit"
      },
}));