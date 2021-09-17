import axios from "axios";
import action_Types from  '../constants/actionTypes';

const getCountries = (name) => async (dispatch) => {
    
    await axios
        .get('https://restcountries.eu/rest/v2/region/' + name )
        .then((res) => {
            console.log("success", res);
        
            dispatch(getData(res.data));
        })
        
    
}

    const getData = (result) => {
    return {
        type: action_Types.SET_DROPDOWN_VALUES,
        payload: result,
    };
};



export default getCountries;