import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import Logo from "../components/Logo";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F2F7FF",
    paddingTop: theme.spacing(12),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    color: "#000000",
    overflow: "hidden",
  },
  input: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
  },
  registerBtn: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    marginLeft: "10px",
    padding: "7.5px 0px",
  },
  iconBtn: {
    display: "inline-flex",
    justifyContent: "center",
    flexWrap: "wrap",
    border: "2px solid #fff",
  },
  socialIcon: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    marginLeft: "10px",
    padding: "6px 0px",
  },
  logo: {
    width: 320,
    height: "auto",
    // borderRadius: '50%'
  },
  iconSocialMedia: {
    color: "#000",
    fontWeight: "500",
    fontSize: "12px",
  },
  centerCls: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  circleCls: {
    // padding: '10px',
    backgroundColor: "#fff",
    color: "#000",
    // border: '2px solid red',
    borderRadius: "50%",
  },
  extraMarginTop: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  extraMargin: {
    marginTop: "10px",
  },
  copyRightPadding: {
    padding: "20px",
    background: "#EBF3FF",
  },

  heading: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
  },
  title: {
    color: "#000",
    fontWeight: "500",
    lineHeight: "15px",
    fontSize: "12px",
  },
}));

function Footer({ className, ...rest }) {
  const classes = useStyles();
  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    paddingRight: "100px",
    justifyContent: "space-between",
  };

  const flexColumn = {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  };

  return (
    <>
      <div className={clsx(classes.root, className)}>
        <Container style={{ maxWidth: "none" }}>
          <Grid
            container
            component="dl"
            style={{ justifyContent: "space-between" }}
          >
            <Grid className={classes.extraMarginTop}>
              <Logo className={classes.logo} />
            </Grid>
            <Grid className={classes.extraMarginTop}>
              <Typography variant="h4" gutterBottom className={classes.heading}>
                Contact us
              </Typography>
              <Grid className={classes.extraMargin}>
                <List style={flexColumn}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="mailto:team@codeforcause.org"
                  >
                    <Typography className={classes.title}>
                      team@codeforcause.org
                    </Typography>
                  </ListItem>
                </List>
                <List style={flexColumn}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://codeforcause.org/terms"
                  >
                    <Typography className={classes.title}>
                      Terms Of Use
                    </Typography>
                  </ListItem>
                </List>
                <List style={flexColumn}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://codeforcause.org/privacy"
                  >
                    <Typography className={classes.title}>
                      Privacy Policy
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid className={classes.extraMarginTop}>
              <Typography variant="h4" gutterBottom className={classes.heading}>
                Resources
              </Typography>
              <Grid className={classes.extraMargin}>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="/"
                    target="_blank"
                  >
                    <Typography className={classes.title}>
                      Webinar and BootCamp
                    </Typography>
                  </ListItem>
                </List>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://medium.com/code-for-cause"
                    target="_blank"
                  >
                    <Typography className={classes.title}>Our Blog</Typography>
                  </ListItem>
                </List>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://codeforcause.org/courses"
                    target="_blank"
                  >
                    <Typography className={classes.title}>Courses</Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>

            <Grid className={classes.extraMarginTop}>
              <Typography variant="h4" gutterBottom className={classes.heading}>
                Follow us on
              </Typography>
              <Grid className={classes.extraMargin}>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://www.instagram.com/codeforcause/"
                    target="_blank"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <InstagramIcon />
                    </ListItemIcon>
                    <Typography className={classes.title}>Instagram</Typography>
                  </ListItem>
                </List>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://www.linkedin.com/company/codeforcauseorg/"
                    target="_blank"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <Typography className={classes.title}>Linkedin</Typography>
                  </ListItem>
                </List>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://www.facebook.com/codeforcauseorg"
                    target="_blank"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <FacebookIcon />
                    </ListItemIcon>
                    <Typography className={classes.title}>Facebook</Typography>
                  </ListItem>
                </List>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://twitter.com/codeforcauseIn"
                    target="_blank"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <TwitterIcon />
                    </ListItemIcon>
                    <Typography className={classes.title}>Twitter</Typography>
                  </ListItem>
                </List>

                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://t.me/codeforcausechat"
                    target="_blank"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <TelegramIcon />
                    </ListItemIcon>
                    <Typography className={classes.title}>Telegram</Typography>
                  </ListItem>
                </List>
                <List style={flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg"
                    target="_blank"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <YouTubeIcon />
                    </ListItemIcon>
                    <Typography className={classes.title}>Youtube</Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Grid className={classes.copyRightPadding}>
        <Typography
          display="block"
          variant="body2"
          color="textSecondary"
          className={classes.copyRightTitle}
        >
          {"Copyright © "}
          {new Date().getFullYear()}{" "}
          <Link color="inherit" href="https://codeforcause.org">
            Code For Cause Pvt. Ltd.
          </Link>
          {" . All rights reserved."}
        </Typography>
      </Grid>
    </>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
