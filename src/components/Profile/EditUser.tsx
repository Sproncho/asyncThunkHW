import React, {useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {updateUser} from "../../features/actions/accountActions";


interface Props {
    close: () => void
}

const EditUser = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();
    const handleClickSave = () => {
        dispatch(updateUser({firstName, lastName}));
        close();
    }
    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }
    return (
        <div>
            <label>First name:
                <input type={'text'} onChange={e => setFirstName(e.target.value.trim())} value={firstName}/>
            </label>
            <label>Last name:
                <input type={'text'} onChange={e => setLastName(e.target.value.trim())} value={lastName}/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClear}>Clear</button>
            <button onClick={close}>Close without Save</button>
        </div>
    );
};

export default EditUser;