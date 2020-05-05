import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    margin: "5%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    // paddingTop: "56.25%", // 16:9
    maxHeight: "300px",
    maxWidth: "300px",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function CardGrid(props) {
  const books = props.results;
  // console.log(books)
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={24}>
        {books.map((book, i) => (
         <Grid item md={4}> 
          <Card className={classes.card} key={i + "card"}>
            <img
              className={classes.cardMedia}
              src={book.image.thumbnail || "https://source.unsplash.com/random"}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {book.title}
              </Typography>
              <Typography
                style={{
                  maxLines: 1,
                  maxHeight: "100px",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {book.description ||
                  "Click on view to see more details about this book."}
              </Typography>
            </CardContent>
            <CardActions>
              <a href={book.link} target="_blank">
                <Button label="View" size="small" color="primary">
                  View
                </Button>
              </a>
              <Button size="small" color="primary">
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Container>
  );
}
