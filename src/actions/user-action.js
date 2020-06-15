import { GetUsers } from '../services/user-service';
import { USERS_SUCCESS, USERS_FAILURE } from './index';

import store from '../utils/store';

export const getAllUsers = () => 
    async dispatch => {
        try {
            const response = await GetUsers();
            dispatch({
                type: USERS_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: USERS_FAILURE,
                payload: error
            });
        }
    }

export const getUserById = (userId) => {
    const users = store.getState().usersInfo.users;
    const found = users.find(function(user, index) {
        if(user.id == userId)
            return true;
    });
    return found;
}