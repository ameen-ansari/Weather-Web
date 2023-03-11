import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { getForecastData } from "./Store/Reducers";

function App() {
  let dispatch = useDispatch()
  // `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=73e6239d34fb2189a11ecddcd2f211e5`
  // `https://api.openweathermap.org/data/2.5/forecast?q=Pakistan,Faisalabad&appid=73e6239d34fb2189a11ecddcd2f211e5`
  useEffect(() => {
    dispatch(getForecastData({
      userInput: {
        country: 'Pakistan',
        city: 'Faisalabad'
      },
      unit: 'metric'
    }))
  }, [dispatch])

  return (
    <div className='appParent'>
      <HomePage />
    </div>
  );
}

export default App;
