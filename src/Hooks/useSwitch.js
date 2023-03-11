import { useDispatch, useSelector } from 'react-redux';
import { getForecastData, tempInCChecker } from '../Store/Reducers';

function useSwitch() {
    let searchQ = useSelector((store) => store.reducers.searchQ);
    let dispatch = useDispatch();
    const handleChange = async (e) => {
        if (e.target.checked) {
            dispatch(tempInCChecker(false));
            dispatch(getForecastData({ userInput: searchQ, unit: "imperial" }));
        } else {
            dispatch(tempInCChecker(true));
            dispatch(getForecastData({ userInput: searchQ, unit: "metric" }));
        }
    };
    return {
        handleChange
    }
}

export default useSwitch