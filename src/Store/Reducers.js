import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { combineReducers } from "redux";

const searchQ = createSlice({
  name: "searchQ",
  initialState: {},
  reducers: {
    updateQData: (state, action) => {
      return action.payload
    }
  },
});
const slice1 = createSlice({
  name: "slice1",
  initialState: [],
  reducers: {},
});

export default combineReducers({
  slice1: slice1.reducer,
  searchQ: searchQ.reducer,
});


export const { updateQData } = searchQ.actions