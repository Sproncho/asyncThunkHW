import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser, registerUser, changePassword} from "../actions/accountActions";

const initialState = '';

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        putToken: (state, action: PayloadAction<string>) => {
            return action.payload
        },
        deleteToken: (state) => {
            return initialState
        }
    },
    extraReducers:builder => {
        builder.addCase(registerUser.fulfilled,(state,action) => action.payload.token)
            .addCase(fetchUser.fulfilled,(state,action) => action.payload.token)
            .addCase(changePassword.fulfilled,(state,action) =>action.payload)
    }
})

export const {putToken, deleteToken} = tokenSlice.actions;
export default tokenSlice.reducer;