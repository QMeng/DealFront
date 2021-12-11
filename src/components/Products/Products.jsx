import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import { MenuItem, Typography, Select } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

import getProductsData from "../../services/GetProductsService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  const classes = useStyles();

  const fetchProducts = async (filter) => {
    const data = await getProductsData(filter);

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts(filterValue);
  }, [filterValue]);

  const filterChangeHandler = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <main className={classes.content}>
      <div className={classes.filter}>
        <Typography className={classes.title} variant="h6" color="inherit">
          Select Product Filter:
        </Typography>
        <Select value={filterValue} onChange={filterChangeHandler}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Rogue Fitness">Rogue Fitness</MenuItem>
          <MenuItem value="Rep Fitness">Rep Fitness</MenuItem>
          <MenuItem value="Titan Fitness">Titan Fitness</MenuItem>
          <MenuItem value="Force USA">Force USA</MenuItem>
          <MenuItem value="RDX Sports">RDX Sports</MenuItem>
          <MenuItem value="Life Fitness">Life Fitness</MenuItem>
        </Select>
      </div>

      <Grid container justifyContent="left" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} lg={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
