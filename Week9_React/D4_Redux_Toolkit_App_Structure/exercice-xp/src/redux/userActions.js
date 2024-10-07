import axios from 'axios';
import { fetchUserStart, fetchUserSuccess, fetchUserError } from './userSlice';

export const fetchUserData = () => async (dispatch) => {
  try {
    dispatch(fetchUserStart());
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); // axios.get

    dispatch(fetchUserSuccess(response.data)); // response.date
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }
};
