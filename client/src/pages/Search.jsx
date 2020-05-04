import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchBar from "../components/SearchBar";
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

export default function SearchView() {
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
                  <Button variant="contained" color="primary">
                  My books
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Explore
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              “Always go too far, because that’s where you’ll find the truth” ~ Albert Camus
            </Typography>
            <SearchBar />
          </Container>
        </div>
        <CardGrid />
      </main>
      <Footer className={classes.footer}/>
    </React.Fragment>
  );
}
