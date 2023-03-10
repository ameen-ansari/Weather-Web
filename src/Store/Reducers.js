import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { combineReducers } from "redux";

const searchQ = createSlice({
  name: "searchQ",
  initialState: '',
  reducers: {
    updateQData: (state, action) => {
      return action.payload
    }
  },
});

const tempInC = createSlice({
  name: "tempInC",
  initialState: true,
  reducers: {
    checker: (state, action) => {
      return action.payload
    }
  },
});

const forecast = createSlice({
  name: "forecast",
  initialState: {},
  reducers: {
    updateForecast: (state, action) => {
      return action.payload
    }
  },
});



export default combineReducers({
  tempInC: tempInC.reducer,
  searchQ: searchQ.reducer,
  forecast:forecast.reducer
});


export const { updateQData } = searchQ.actions
export const { checker } = tempInC.actions
export const { updateForecast } = forecast.actions