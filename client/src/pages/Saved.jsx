import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer"
import CardGrid from "../components/CardGrid"

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginBottom: theme.spacing(5),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function SavedView() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
          <div className={classes.heroButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                <Link to="saved">
                  <Button variant="contained" color="primary">
                  My books
                  </Button>
                  </Link>
                </Grid>
                <Grid item>
                <Link to="">
                  <Button variant="outlined" color="primary">
                    Explore
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Saved books
            </Typography>
            {/* <SearchBar /> */}
          </Container>
        </div>
        <CardGrid />
      </main>
      <Footer className={classes.footer}/>
    </React.Fragment>
  );
}
