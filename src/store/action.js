import jsonData from '../../users.json'; 
import { toast } from "react-toastify"

import { ActionTypes } from './types';


// Action creators for fetching users
export const fetchUsersRequest = () => ({
  type: ActionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: ActionTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: ActionTypes.FETCH_USERS_FAILURE,
  payload: error,
});

// Action creators for creating a new user
export const createUserRequest = () => ({
  type: ActionTypes.CREATE_USER_REQUEST,
});

export const createUserSuccess = (user) => ({
  type: ActionTypes.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error) => ({
  type: ActionTypes.CREATE_USER_FAILURE,
  payload: error,
});


export const addUser = (user) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: user,
  };
};
// Action creators for updating an existing user
export const updateUserRequest = () => ({
  type: ActionTypes.UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
  type: ActionTypes.UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailure = (error) => ({
  type: ActionTypes.UPDATE_USER_FAILURE,
  payload: error,
});

// Action creators for deleting a user
export const deleteUserRequest = () => ({
  type: ActionTypes.DELETE_USER_REQUEST,
});

export const deleteUserSuccess = (userId) => ({
  type: ActionTypes.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserFailure = (error) => ({
  type: ActionTypes.DELETE_USER_FAILURE,
  payload: error,
});


export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    try {
      // Use your local JSON data
      const users = jsonData.users;

      // Dispatch a success action with the user data
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      // Handle any errors during the data fetching process
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

export const updateUser = (updatedUser) => {
  return (dispatch) => {
    dispatch(updateUserRequest());

    try {
      // Find the user in the JSON data based on some identifier (e.g., user ID)
      const updatedUsers = jsonData.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );

      // Update the local JSON data
      jsonData.users = updatedUsers;

      // Dispatch a success action with the updated user
      dispatch(updateUserSuccess(updatedUser));
    } catch (error) {
      // Handle any errors during the update process
      dispatch(updateUserFailure(error.message));
    }
  };
};


export const AddUser = (data) => {
  return (dispatch) => {
    try {
      jsonData.users.push(data);
      dispatch(addUser());
      toast.success('User Added successfully.');
    } catch (error) {
      dispatch(createUserFailure(error.message));
    }
  };
};



export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId, // You can include additional data if needed
  };
};









