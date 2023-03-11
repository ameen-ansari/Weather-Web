import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export let getForecastData = createAsyncThunk('web/getData', async ({ userInput, unit }) => {
  let getResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${userInput.country},${userInput.city}&units=${unit}&appid=73e6239d34fb2189a11ecddcd2f211e5`
  )
  let forecast = await getResponse.json()
  return forecast
})

const searchQ = createSlice({
  name: "searchQ",
  initialState: {
    country: 'Pakistan',
    city: 'Faisalabad'
  },
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
    tempInCChecker: (state, action) => {
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
  extraReducers: (builder) => {
    builder.addCase(getForecastData.fulfilled, (state, action) => {
      return action.payload
    })
  }
});



export default combineReducers({
  tempInC: tempInC.reducer,
  searchQ: searchQ.reducer,
  forecast: forecast.reducer
});


export const { updateQData } = searchQ.actions
export const { tempInCChecker } = tempInC.actions
export const { updateForecast } = forecast.actions