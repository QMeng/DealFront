import React from "react";
import { Typography, Box } from "@material-ui/core";

import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} sx={{ width: "100%", maxWidth: 500 }}>
      <Typography className={classes.title} variant="h6" color="inherit">
        To be added, we are working hard to enable this function
      </Typography>
    </Box>
  );
};

export default AboutUs;
