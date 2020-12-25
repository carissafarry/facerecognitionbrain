import React, { Component } from 'react';
import './SignIn.css';

class SigninContainer extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="authBox">
                    <div className="leftBox">
                        <div className="bgGreen"></div>
                        <div className="imageAuth"></div>
                        <div className="imageText bold style1">Safe for Care</div>
                        <div className="imageText style2">Daftarkan keluarga Anda</div>
                    </div>
                    <div className="rightBox">
                        <div className="box">
                            <div className="titleAuth">Sign In</div>
                            <form>
                                <div className="inputSBox">
                                    {/* <label className='' htmlFor=''>Username</label> */}
                                    <input type="text" className="inputS" placeholder="Username" />
                                </div>
                                <div className="inputSBox">
                                    {/* <label className='' htmlFor=''>Password</label> */}
                                    <input type="password" className="inputS" placeholder="Password" />
                                </div>
                                <div className="contentBox">
                                    <div className="checkbox Box">
                                        <input type="checkbox" className="checkbox" />
                                        <label className="checkboxLabel">Ingat saya</label>
                                    </div>
                                    <div className="text1"><a href='/recognition'>Lupa password?</a></div>
                                </div>
                                <div className="inputBtn">
                                    <input type='submit' name='' value='Log In'></input>
                                </div>
                            </form>
                            <div className="btnAuth"><a href="/register">Register</a></div>
                            <div className="iconBox">
                                <div className="borderBox">
                                    <div className="line"></div>
                                    <div className="text2 or">OR</div>
                                </div>
                                <div className="socialMediaBox">
                                    <div className="icAuth google">
                                        <a href="http://">
                                            <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="google" />
                                        </a>
                                    </div>
                                    <div className="icAuth facebook">
                                        <a href="http://">
                                            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" />
                                        </a>
                                    </div>
                                    <div className="icAuth twitter">
                                        <a href="http://">
                                            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SigninContainer;