import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Link from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
          Henry´s Polls
        </Typography>
          <div >
            <Link href={"/"} >
              Home
            </Link>
            <Link href={"/login"} >
              Login
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}