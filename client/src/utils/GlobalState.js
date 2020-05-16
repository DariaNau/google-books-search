import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOKS,
  ADD_BOOK,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_BOOK:
    return {
      ...state,
      currentBOOK: action.BOOK,
      loading: false
    };

  case UPDATE_BOOKS:
    return {
      ...state,
      BOOKs: [...action.BOOKs],
      loading: false
    };

  case ADD_BOOK:
    return {
      ...state,
      BOOKs: [action.BOOK, ...state.BOOKs],
      loading: false
    };

  case REMOVE_BOOK:
    return {
      ...state,
      BOOKs: state.BOOKs.filter((BOOK) => {
        return BOOK._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.BOOK, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((BOOK) => {
        return BOOK._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};
