import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Login/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn=(e)=>{
        e.preventDefault();
      

    }
    const register=(e)=>{
       e.preventDefault();
       // console.log(email,password); 

    }
    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt=''/>
            </Link>
            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login_signInButtoon' onClick={signIn} type="submit">Sign In</button>

                </form>
                <p>By Signing-in you agree to Amazon Terms and condition & Sale. Please See our Privacy Notice, Our Cookies Notice and Our Interest based Ads Notice</p>
                <button className='login_registerButton' onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login