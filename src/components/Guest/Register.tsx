import React, {useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {registerUser} from "../../features/actions/accountActions";

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();
    const handleClickRegister = () => {
        dispatch(registerUser({login, password, firstName, lastName}));
    }
    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
    return (
        <div>
            <label>Login:
                <input type={'text'} onChange={e => setLogin(e.target.value.trim())} value={login}/>
            </label>
            <label>Password:
                <input type={'password'} onChange={e => setPassword(e.target.value.trim())} value={password}/>
            </label>
            <label>First name:
                <input type={'text'} onChange={e => setFirstName(e.target.value.trim())} value={firstName}/>
            </label>
            <label>Last name:
                <input type={'text'} onChange={e => setLastName(e.target.value.trim())} value={lastName}/>
            </label>
            <button onClick={handleClickRegister}>Register</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default Register;