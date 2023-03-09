import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  //   `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=73e6239d34fb2189a11ecddcd2f211e5`
  // `https://api.openweathermap.org/data/2.5/forecast?q=Pakistan,Faisalabad&appid=73e6239d34fb2189a11ecddcd2f211e5`

  return (
    <div className='appParent'>
      <HomePage />
    </div>
  );
}

export default App;
