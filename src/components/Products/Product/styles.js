import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
      },
      media: {
        height: 0,
        paddingTop: '100%',
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
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
        textDecoration: "line-through",
      },
      curPrice: {
        color: "red"
      },
      button: {
        fontSize: "20px",
        fill: colors.lightBlue
      },
}));