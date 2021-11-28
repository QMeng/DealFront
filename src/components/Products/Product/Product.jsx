import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@material-ui/core";

import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={product.url}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <div className={classes.prices}>
              <Typography variant="h6" className={classes.orgPrice}>
                {product.orgPrice}
              </Typography>
              <Typography variant="h6">-</Typography>
              <Typography variant="h6" className={classes.price}>
                {product.price}
              </Typography>
            </div>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.source}
          </Typography>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Source" className={classes.button} href={product.url}>
              Details
            </IconButton>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
