import { useDispatch, useSelector } from 'react-redux';
import { getForecastData, setLoader, tempInCChecker } from '../Store/Reducers';

function useSwitch() {
    let searchQ = useSelector((store) => store.reducers.searchQ);
    let dispatch = useDispatch();
    const handleChange = async (e) => {
        dispatch(setLoader(true))
        if (e.target.checked) {
            dispatch(tempInCChecker(false));
            dispatch(getForecastData({ userInput: searchQ, unit: "imperial" })).then(() => { dispatch(setLoader(false)) });
        } else {
            dispatch(tempInCChecker(true))
            dispatch(getForecastData({ userInput: searchQ, unit: "metric" })).then(() => { dispatch(setLoader(false)) });
        }
    };
    return {
        handleChange
    }
}

export default useSwitch