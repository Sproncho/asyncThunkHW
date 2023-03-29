import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserProfile} from "../../utils/types";
import {fetchUser, registerUser,updateUser} from "../actions/accountActions";
import UpdateUser from "../../components/Profile/UpdateUser";

const initialState = null as null | UserProfile;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteUser: (state) => initialState,
        putUser: (state, action: PayloadAction<UserProfile>) => action.payload,
        changeFirstName: (state, action: PayloadAction<string>) => {
            if (state) {
                state.firstName = action.payload;
            } else {
                return state;
            }

        },
        changeLastName: (state, action: PayloadAction<string>) => {
            if (state) {
                state.lastName = action.payload;
            } else {
                return state;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled,(state,action) => action.payload.data)
            .addCase(fetchUser.fulfilled,(state,action) => action.payload.user)
            .addCase(updateUser.fulfilled,(state,action) => action.payload)
    }
})

export const {deleteUser, putUser, changeLastName, changeFirstName} = userSlice.actions;
export default userSlice.reducer;