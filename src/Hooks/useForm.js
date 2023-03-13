import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForecastData, setLoader, updateQData } from "../Store/Reducers";


function useForm() {
    let dispatch = useDispatch();
    let store = useSelector((store) => store.reducers);
    const [userInput, setUserInput] = useState({
        country: 'Pakistan',
        city: 'Faisalabad'
    });
    let inputH = (e) => {
        let inputs = { [e.target.name]: e.target.value };
        setUserInput({
            ...userInput,
            ...inputs,
        });
    };
    let Submit = async () => {
        dispatch(updateQData(userInput));
        dispatch(setLoader(true))
        if (store.tempInC) {
            dispatch(getForecastData({ userInput: userInput, unit: 'metric' })).then(()=>{
                dispatch(setLoader(false))
            });
        } else {
            dispatch(getForecastData({ userInput: userInput, unit: 'imperial' })).then(()=>{
                dispatch(setLoader(false))
            });
        }
    };
    return {
        inputH,
        Submit,
        userInput,
        setUserInput,
    }
}

export default useForm