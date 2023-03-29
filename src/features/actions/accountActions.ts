import {UserRegister} from "../../utils/types";
import {AppDispatch, RootState, store} from "../../app/store";
import {baseUrl, createToken} from "../../utils/constants";
import {putUser} from "../slices/userSlice";
import {putToken} from "../slices/tokenSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister) => {
        const response = await fetch(`${baseUrl}/user`, {
            method: 'P ost',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return {
            data,
            token:createToken(user.login, user.password)
        };
    }
);
// export const registerUser = (user: UserRegister) => {
//     return async (dispatch: AppDispatch) => {
//         //TODO pending, error
//         const response = await fetch(`${baseUrl}/user`, {
//             method: 'Post',
//             body: JSON.stringify(user),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         if (response.ok) {
//             const data = await response.json();
//             dispatch(putUser(data));
//             dispatch(putToken(createToken(user.login, user.password)));
//         } else {
//             throw new Error(response.status.toString());
//         }
//     }
// }

export const fetchUser = createAsyncThunk(
    'fetch/user',
    async (token: string) => {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'Post',
            headers: {
                'Authorization': token
            }
        });
        const data = await response.json();
        return {user: data, token: token}
    }
)
// export const fetchUser = (token: string) => {
//     return async (dispatch: AppDispatch) => {
//         //TODO pending, error
//         const response = await fetch(`${baseUrl}/login`, {
//             method: 'Post',
//             headers: {
//                 'Authorization': token
//             }
//         });
//         if (response.ok) {
//             const data = await response.json();
//             dispatch(putUser(data));
//             dispatch(putToken(token));
//         } else {
//             throw new Error(response.status.toString());
//         }
//     }
// }

export const updateUser = createAsyncThunk<any,
    { firstName: string, lastName: string },
    { state: RootState }>(
    'user/update',
    async (arg, thunkApi) => {
        //TODO pending, error
        const state: RootState = thunkApi.getState();
        const response = await fetch(`${baseUrl}/user`, {
            method: 'Put',
            body: JSON.stringify({firstName: arg.firstName, lastName: arg.lastName}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': state.token
            }
        });
        const data = await response.json();
        return data;
    }
)
// export const updateUser = (firstName: string, lastName: string) => {
//     return async (dispatch: AppDispatch, getState: typeof store.getState) => {
//         //TODO pending, error
//         const response = await fetch(`${baseUrl}/user`, {
//             method: 'Put',
//             body: JSON.stringify({firstName, lastName}),
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': getState().token
//             }
//         });
//         if (response.ok) {
//             const data = await response.json();
//             dispatch(putUser(data));
//         } else {
//             throw new Error(response.status.toString());
//         }
//     }
// }


export const changePassword = createAsyncThunk<string,
    string,
    { state: RootState }>(
    'user/changePassword',
    async (password: string, thunkApi) => {
        //TODO pending, error
        const response = await fetch(`${baseUrl}/user/password`, {
            method: 'Put',
            headers: {
                'Authorization': thunkApi.getState().token,
                'X-Password': password
            }
        });
        return createToken(thunkApi.getState().user!.login, password);
    }
)
// export const changePassword = (password: string) => {
//     return async (dispatch: AppDispatch, getState: typeof store.getState) => {
//         //TODO pending, error
//         const response = await fetch(`${baseUrl}/user/password`, {
//             method: 'Put',
//             headers: {
//                 'Authorization': getState().token,
//                 'X-Password': password
//             }
//         });
//         if (response.ok) {
//             dispatch(putToken(createToken(getState().user!.login, password)));
//         } else {
//             throw new Error(response.status.toString());
//         }
//     }
// }