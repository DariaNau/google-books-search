import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Google Books Search
        </Link>{" "}
        {new Date().getFullYear()}
        {""}
      </Typography>
    );
  }

export default function Footer(props) {
    return (
      <footer className={props.className}>
      <Typography variant="h6" align="center" gutterBottom>
        {/* Footer */}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p">
        {/* Something here to give the footer a purpose! */}
      </Typography>
      <Copyright />
    </footer>
    );
  }