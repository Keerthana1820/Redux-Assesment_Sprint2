import action_Types from '../constants/actionTypes';
const INITIAL_STATE = {
  result: [],

}
const countryRegionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case action_Types.SET_DROPDOWN_VALUES:
      return {
        ...state,
        result: payload,
      };
    
    default:
      return state;
  }
};

export default countryRegionReducer;