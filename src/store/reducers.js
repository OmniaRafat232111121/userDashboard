import { combineReducers } from 'redux';
import ActionTypes from './types';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case ActionTypes.CREATE_USER_SUCCESS:
        console.log('State before update:', state);

        const newUser = action.payload;
        console.log('State after update:', state);

        return {
          ...state,
          users: [...state.users, newUser],
          loading: false,
          error: null,
        };
   
      case ActionTypes.UPDATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        case ActionTypes.UPDATE_USER_SUCCESS:
  console.log('State before update:', state);
  const updatedUsers = state.users.map((user) =>
    user.id === action.payload.id ? action.payload : user
  );
  console.log('State after update:', { ...state, users: updatedUsers });
  return {
    ...state,
    users: updatedUsers,
    loading: false,
    error: null,
  };
      case ActionTypes.UPDATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
