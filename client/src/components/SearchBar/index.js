/* eslint-disable no-use-before-define */
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
// import "./style.css";
import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import SearchIcon from "@material-ui/icons/Search";
import IconButton from '@material-ui/core/IconButton';

export default function SearchBar(props) {
  return (
    <div
      className="search"
      {...props}
      style={{
        paddingTop: "5%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        style={{
          width: "30%",
          // display: "inline-block",
        }}
        type="text"
        className="searchTerm"
        placeholder="What are you looking for?"
      />
      <IconButton style={{ display: "inline-block"}}>
        <SearchIcon fontSize="medium" />
      </IconButton>
    </div>
  );
}
