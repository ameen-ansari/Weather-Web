import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";

export let getForecastData = createAsyncThunk('web/getData', async ({ userInput, unit }) => {
  try {
    // let dispatch = useDispatch()
    let getResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${userInput.country},${userInput.city}&units=${unit}&appid=73e6239d34fb2189a11ecddcd2f211e5`
      )
      let forecast = await getResponse.json()
      // dispatch(setLoader(true))
    return forecast
  } catch (error) {
    alert(error)
  }
  finally {
    // dispatch(setLoader(false))
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