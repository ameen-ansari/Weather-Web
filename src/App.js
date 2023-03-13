import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import HomePage from "./Pages/HomePage/HomePage";
import { getForecastData, setLoader } from "./Store/Reducers";

function App() {
  let store = useSelector((store) => store.reducers.loader)
  let dispatch = useDispatch()
  // `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=73e6239d34fb2189a11ecddcd2f211e5`
  // `https://api.openweathermap.org/data/2.5/forecast?q=Pakistan,Faisalabad&appid=73e6239d34fb2189a11ecddcd2f211e5`
  useEffect(() => {
    dispatch(setLoader(true))
    dispatch(getForecastData({
      userInput: {
        country: 'Pakistan',
        city: 'Faisalabad'
      },
      unit: 'metric'
    })).then(() => {
      dispatch(setLoader(false))
    })
  }, [dispatch])

  return (
    <div className='appParent'>
      <HomePage />
      {
        store ?
          <Loader /> : null
      }
    </div>
  );
}

export default App;
// sun
// https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Status-weather-clear-icon.png

// sun + clouds
// https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Status-weather-clouds-icon.png
// https://icons.iconarchive.com/icons/jackietran/cloud/64/cloud-sun-icon.png
