import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";
import logo from '../../assets/dumbbell.png'

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
              <img src={logo} alt="Fitness Deals!" height="25px" className={classes.image} />
            Your one stop place to check fitness deals!
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
