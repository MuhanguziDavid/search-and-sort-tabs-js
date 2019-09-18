import { toast } from 'react-toastify';
import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from './types';

export const loadData = (inputData) => dispatch => {
  if (loadData) {
    toast.success('Data load successful', { autoClose: 3500, hideProgressBar: true });
    return dispatch({ type: LOAD_DATA_SUCCESS, payload: inputData });
  }
  toast.failure('Data load failed', { autoClose: 3500, hideProgressBar: true });
  return dispatch({ type: LOAD_DATA_FAILURE, payload: true });
};