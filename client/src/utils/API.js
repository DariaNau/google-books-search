import axios from "axios";

export default {
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
