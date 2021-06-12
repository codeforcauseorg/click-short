import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Box, Container, Typography, makeStyles } from '@material-ui/core';
// import ApplyNowModal from './ApplyNowModal';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#FFF',
    padding: '127px 70px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    color: '#FFF'
  },
  subtitle: {
    fontStyle: 'italic',
    fontWeight: 600
  }
}));

function Hero({
  title,
  subtitle,
  className="", // className
  backgroundImage = "url(/images/hero.png)", // Link to the  background image if any
  ...rest
}) {
  const classes = useStyles();

  return (
    <div>
        <div
          className={clsx(classes.root, className)}
          style={{
            backgroundImage: `${backgroundImage}`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            backgroundPositionX: 'center'
          }}
          {...rest}
        >
          <Container maxWidth="lg">
            <div className={classes.main}>
              <Typography align="center" variant="h3" style={{fontWeight: 600}}>
                {title}
              </Typography>
              <Box mt={2}>
                <Typography
                  className={classes.subtitle}
                  variant="body1"
                  align="center"
                >
                  {subtitle}
                </Typography>
              </Box>
            </div>
          </Container>
        </div>
      )
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleDesign: PropTypes.string,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default Hero;
