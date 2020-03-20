import React from "react";
import useUserForm from "../hooks/useUserForm";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {
  ContainerLogin,
  MainDiv,
  PaperLogin,
  LoginTextField,
  TypographyLogin,
  StyledLink
} from "../styles/login";
const axios = require("axios").default;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// MATERIAL UI STYLING CSS

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// LOGIN FUNCTION

export default function Login(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {
    const body = {
      email: inputs.email,
      password: inputs.password
    };

    return axios({
      method: "post",
      url: "/users/login",
      data: body
    })
      .then(response => {
        props.setUserCookie(response.data.firstname, response.data.id);
        props.setUser({
          firstName: response.data.firstname,
          id: response.data.id
        });

        history.push("/menu");
      })
      .catch(err => {
        console.log(err);
        handleClickOpen();
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useUserForm(login);

  return (
    <main>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Login component"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            There was a problem loggin you in. Double check your email and
            password, then try again!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <MainDiv>
        <PaperLogin elevation={10}>
          <ContainerLogin component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <TypographyLogin component="h1" variant="h5">
                Login
              </TypographyLogin>
              <form className={classes.form} onSubmit={handleSubmit}>
                <LoginTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleInputChange}
                  autoFocus
                  style={{ color: "white" }}
                />
                <LoginTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={inputs.password || ""}
                  onChange={handleInputChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <StyledLink
                      href=""
                      onClick={() => history.push("/signup")}
                      variant="body2"
                    >
                      Don't have an account? Sign Up
                    </StyledLink>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}></Box>
          </ContainerLogin>
        </PaperLogin>
      </MainDiv>
    </main>
  );
}
