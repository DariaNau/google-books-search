import axios from "axios";
import APIKEY from 'dotenv'
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Google Books API Call
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // Saves a book to the database
  saveBook: function(data) {
    return axios.post("/api/books", data);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
