import React from "react";
import { Typography, Box } from "@material-ui/core";

import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} sx={{ width: "100%", maxWidth: 800 }}>
      <Typography className={classes.title} variant="h4" color="inherit">
        Who we are
      </Typography>
      <Typography className={classes.content} variant="body1" color="inherit">
        We are just 2 programmers who noticed there is no centralized place to
        view fitness equipment deals on popular brands. 
        <br />
        So we created this website. Please enjoy deals shared here!
        <br />
        <br />
        We are quite new to webpage coding and designs, as you can see from the "roughness" of this website &#128514;
        <br /> 
        We are working hard on learning more advanced techniques and improving this website. 
      </Typography>

      <Typography className={classes.title} variant="h4" color="inherit">
        Credits
      </Typography>
      <Typography className={classes.content} variant="body1" color="inherit">
        We would like to express our appreciation and gratitude to the following
        entities:
        <ul>
          <li className={classes.content}>Javascript Mastery</li>
          <Typography variant="body1" color="inherit" className={classes.content}>
            We learnt a lot from Javascript Mastery's <a href="https://www.youtube.com/watch?v=377AQ0y6LPA&ab_channel=JavaScriptMastery">tutorial</a>. Thank you for creating those awesome tutorials
          </Typography>
          <li className={classes.content}><a href="https://www.flaticon.com/authors/freepik">Freepik</a></li>
          <Typography variant="body1" color="inherit" className={classes.content}>
            Thank you for sharing such awesome icons
          </Typography>

        </ul>
      </Typography>
    </Box>
  );
};

export default AboutUs;
