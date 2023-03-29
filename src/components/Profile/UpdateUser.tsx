import React, {useState} from 'react';
import EditUser from "./EditUser";
import ChangePassword from "./ChangePassword";
import {UpdateUserAction} from "../../utils/types";

const UpdateUser = () => {
    const [updateAction, setUpdateAction] = useState(UpdateUserAction.default);
    const close = () => setUpdateAction(UpdateUserAction.default);

    switch (updateAction) {
        case UpdateUserAction.editUser:
            return <EditUser close={close}/>
        case UpdateUserAction.changePassword:
            return <ChangePassword close={close}/>
        default:
            return (
                <div>
                    <button onClick={() => setUpdateAction(UpdateUserAction.changePassword)}>Change password</button>
                    <button onClick={() => setUpdateAction(UpdateUserAction.editUser)}>Edit user profile</button>
                </div>
            );
    }
};

export default UpdateUser;