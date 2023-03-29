import React, {useState} from 'react';
import Login from "./Login";
import Register from "./Register";

const Guest = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            {isLogin ? <Login/> : <Register/>}
            <button onClick={() => setIsLogin(prevState => !prevState)}>{isLogin ? 'Switch to Register' : 'Switch to Login'}</button>
        </div>
    );
};

export default Guest;