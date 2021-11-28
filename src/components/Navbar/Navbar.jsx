import React from "react";
import {
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  Select,
} from "@material-ui/core";

import useStyles from "./styles";
import logo from "../../assets/dumbbell.png";

const Navbar = ({ selectedFilter, onFilterChange }) => {
  const classes = useStyles();

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Fitness Deals!"
              height="25px"
              className={classes.image}
            />
            Your one stop place to check fitness deals!
          </Typography>
          <div className={classes.grow} />
          <div className={classes.filter}>
            <Typography className={classes.title} variant="h6" color="inherit">
              Select Product Filter:
            </Typography>
            <Select value={selectedFilter} onChange={handleFilterChange}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Rep Fitness">Rep Fitness</MenuItem>
              <MenuItem value="Titan Fitness">Titan Fitness</MenuItem>
              <MenuItem value="Force USA">Force USA</MenuItem>
            </Select>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
