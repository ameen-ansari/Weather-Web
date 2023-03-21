import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export let getForecastData = createAsyncThunk('web/getData', async ({ userInput, unit }) => {
  try {
    let getResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${userInput.country},${userInput.city}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`
      )
      let forecast = await getResponse.json()
    return forecast
  } catch (error) {
    alert(error)
  }
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

const loader = createSlice({
  name: "loader",
  initialState: true,
  reducers: {
    setLoader: (state, action) => {
      return action.payload
    }
  },
});



export default combineReducers({
  tempInC: tempInC.reducer,
  searchQ: searchQ.reducer,
  forecast: forecast.reducer,
  loader: loader.reducer,
});


export const { updateQData } = searchQ.actions
export const { tempInCChecker } = tempInC.actions
export const { updateForecast } = forecast.actions
export const { setLoader } = loader.actions