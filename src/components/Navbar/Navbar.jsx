import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import useStyles from "./styles";
import logo from "../../assets/dumbbell.png";

const Navbar = ({ onTabChange }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const classes = useStyles();

  const handleTabChange = (tab) => {
    setSelectedButton(tab);
    onTabChange(tab === 1, tab === 2);
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
            Best place to find fitness deals!
          </Typography>
          <div className={classes.grow} />
          <ButtonGroup>
            <Button
              color={selectedButton === 1 ? "secondary" : "primary"}
              onClick={() => handleTabChange(1)}
              className={classes.button}
            >
              Equipments
            </Button>
            <Button
              color={selectedButton === 2 ? "secondary" : "primary"}
              onClick={() => handleTabChange(2)}
              className={classes.button}
            >
              About Us
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
