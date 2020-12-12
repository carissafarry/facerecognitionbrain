import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='RegisterContainer'>
            <div className='container'>
                <div className='heading'>
                    <h2>Safe for Care</h2>
                    <h4>Register</h4>
                </div>
                <div className='user'>
                    {/* <label className='' htmlFor=''>Username</label> */}
                    <input type='text' name='' placeholder='Username'></input>
                </div>
                <div className='user'>
                {/* <label className='' htmlFor=''>Password</label> */}
                    <input type='password' name='' placeholder='Password'></input>
                </div>
                <div className='button'>
                    <input type='submit' name='' value='Log In'></input>
                </div>
                <div className='help'>
                    <h3>Have an account?<span><a href='/signin' className='link'>  Sign In</a></span></h3>
                </div>
                <div className='social'>
                    <ul className='items'>
                        <li><h3 className='link'>G</h3></li>
                        <li><h3 className='link'>f</h3></li>
                        <li><h3 className='link'>t</h3></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Register;