import React from 'react';
import ProfileData from "./ProfileData";
import UpdateUser from "./UpdateUser";
import {useAppDispatch} from "../../app/hooks";
import {deleteToken} from "../../features/slices/tokenSlice";
import {deleteUser} from "../../features/slices/userSlice";

const Profile = () => {
    const dispatch = useAppDispatch();
    const handleClickLogout = () => {
        dispatch(deleteToken());
        dispatch(deleteUser());
    }
    return (
        <div>
            <ProfileData/>
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;