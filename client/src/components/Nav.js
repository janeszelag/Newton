import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";

const Apple = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 6px;
`;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  app: {
    
    display: "flex",
    verticalAlign: "middle"

  },
  toolbar: {
    minHeight: 60,
    verticalAlign: "middle"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontWeight: 600,
    fontSize: "x-large",
    color: "#F8FAF9"

  },
  title2: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    marginTop: "0.25em",
    fontWeight: 500,
    fontSize: "x-large",
    color: "#F8FAF9"

  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 400
    },
    color: "#F8FAF9",
    fontWeight: 600
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  icon: {
    color: 'white',
  },
}));

export default function PrimarySearchAppBar(props) {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

 

  const logout = () => {
    props.removeUserCookie()
    handleMenuClose()
    props.setUser({ email: "", name: "", id: "" });
    history.push("/login");
  }
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {props.userName && <MenuItem onClick={handleMenuClose}>My Boards</MenuItem>}
      {props.userName && <MenuItem onClick={() => logout()}>Logout</MenuItem>}
      {!props.userName && <MenuItem onClick={() => history.push("/login")}>Login</MenuItem>}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  //console.log(props.userName)
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.app}>
        <Toolbar className={classes.toolbar}>
        <ButtonBase onClick={() => history.push("/menu")}>
          <Apple src="https://res.cloudinary.com/dpfixnpii/image/upload/v1584418511/apple_1_yzrfxh.svg"/>
          <Typography className={classes.title} variant="h6" noWrap>
            newton
          </Typography>
          </ButtonBase>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.icon} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
         
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {props.userName && <Typography className={classes.title2} variant="h6" noWrap>
           Hi {props.userName}!
          </Typography> }
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.icon}
              
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
