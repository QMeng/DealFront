import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variatn="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variatn="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="View">
            View
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
