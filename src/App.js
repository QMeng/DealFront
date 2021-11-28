import React, { useState, useEffect } from "react";
import getProductsData from "./services/GetProductsService";

import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("All");

  const fetchProducts = async (filter) => {
    const data = await getProductsData(filter);

    setProducts(data);
  };


  useEffect(() => {
    fetchProducts(filterValue);
  }, [filterValue]);

  const filterChangeHandler = (newFilter) => {
    setFilterValue(newFilter);
  };

  return (
    <div>
      <Navbar selectedFilter={filterValue} onFilterChange={filterChangeHandler}/>
      <Products products={products}/>
    </div>
  );
};

export default App;
