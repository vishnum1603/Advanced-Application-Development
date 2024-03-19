import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import backgroundImage from "../../assets/images/party.jpg";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const defaultTheme = createTheme();

export default function SignInSide() {
  const [showSignup, setShowSignup] = React.useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleSignInClick = () => {
    setShowSignup(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: "89vh",
          width: "93%",
          margin: "5.5vh auto",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 0px 10px rgba(0, 0, 0.1, 0.3)",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {showSignup ? "Sign Up" : "Sign In"}
            </Typography>

            {showSignup ? <SignUpForm /> : <SignInForm />}
            <Grid container>
              <Grid item>
                {showSignup ? (
                  <>
                    Already have an account?{" "}
                    <Link href="#" variant="body2" onClick={handleSignInClick}>
                      Sign In
                    </Link>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <Link href="#" variant="body2" onClick={handleSignupClick}>
                      Sign Up
                    </Link>
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
