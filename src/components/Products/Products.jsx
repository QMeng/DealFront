import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "MYRACK MODULAR POWER RACK",
    description: "Power rack",
    price: "$399.99",
    image:
      "https://cdn.shopify.com/s/files/1/1963/1339/products/myrack-full-front-left_270x270.jpg?",
  },
  {
    id: 2,
    name: "FORCE USA G3 ALL-IN-ONE TRAINER",
    description: "Trainer",
    price: "$2,199.99",
    image:
      "https://cdn.shopify.com/s/files/1/1963/1339/products/G3-hero_6ee54510-31cd-4807-9a87-e3900cd00533_270x270.jpg?v=1604085531",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
