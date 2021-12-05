import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        height: '100%',
      },
      media: {
        height: 0,
        paddingTop: '100%',
      },
      cardRoot: {
        paddingLeft: "15px",
        paddingRight: "15px",
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      prices: {
        display: "flex",
        gap: "0.5rem",
      },
      orgPrice: {
        paddingLeft: "8px",
        textDecoration: "line-through",
      },
      curPrice: {
        color: "red"
      },
      button: {
        fontSize: "20px",
        color: "gray", 
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
}));