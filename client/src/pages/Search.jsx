import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer"
import CardGrid from "../components/CardGrid"

import API from "../utils/API"

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
  
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
    // console.log(value)
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.search(bookSearch)
      .then(res => 
        console.log(res.data)
        // setBooks(res.data)
        )
      .catch(err => console.log(err));
  };

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
              “Always go too far, because that’s where you’ll find the truth” ~ Albert Camus
            </Typography>
            <SearchBar 
            name="BookSearch"
            value={bookSearch}
            onChange={handleInputChange}
            />
                        <Button
                      onClick={handleFormSubmit}

                    >
                        Search
                    </Button>
          </Container>
        </div>
        <CardGrid />
      </main>
      <Footer className={classes.footer}/>
    </React.Fragment>
  );
}
