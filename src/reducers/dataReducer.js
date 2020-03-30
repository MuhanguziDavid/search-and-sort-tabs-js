import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE
} from '../actions/types';

const initialState = {
  data: {},
  dataLoadFailure: false,
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case LOAD_DATA_FAILURE:
      return {
        ...state,
        dataLoadFailure: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
  