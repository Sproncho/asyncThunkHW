import React, {useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {changePassword} from "../../features/actions/accountActions";

interface Props {
    close: () => void
}

const ChangePassword = ({close}: Props) => {
    const [password, setPassword] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const dispatch = useAppDispatch();
    const handleClickSave = () => {
        if(pass1 === pass2){
            dispatch(changePassword(pass1));
        }
        close();
    }
    const handleClickClear = () => {
       setPassword('');
       setPass1('');
       setPass2('');
    }

    return (
        <div>
            <label>Old password:
                <input type={'password'} onChange={e => setPassword(e.target.value.trim())} value={password}/>
            </label>
            <label>New password:
                <input type={'password'} onChange={e => setPass1(e.target.value.trim())} value={pass1}/>
            </label>
            <label>Repeat new password:
                <input type={'password'} onChange={e => setPass2(e.target.value.trim())} value={pass2}/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClear}>Clear</button>
            <button onClick={close}>Close without Save</button>
        </div>
    );
};

export default ChangePassword;