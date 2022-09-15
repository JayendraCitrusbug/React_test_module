import React, { useState, useEffect } from 'react'
import '../templates/assets/css/swiper-bundle.min.css'
import '../templates/assets/css/common.css'
import '../templates/assets/css/login.css'
import '../templates/assets/css/custom.css'
import logo2 from '../templates/assets/images/logo2.svg'
import axios from 'axios'

// const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
// const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [userid, setUserid] = useState('')

    const verifyLogin = () => {
        let formData = new FormData()
        formData.append("email", email)
        formData.append("password", pwd)

        axios({
            url: "http://43.204.196.131:9300/api/v1/login/",
            method: "POST",
            data: formData
        })
        .then((res) => {setErrMsg(''); setSuccessMsg(res.data.message); if(res.data.status===true){setErrMsg(''); setSuccessMsg(''); setSuccess(true); setUserid(res.data.userid); window.location="/verifyotp"}})
        .catch((err) => {setSuccessMsg(''); setErrMsg(err.response.data.message);})
    }
    
    
    return (
        <div className="cf_login_wrapper">
            <div className="cf_login_inner">
                <div className="cf_login_block">
                    <div className="cf_login_logoBlock">
                        <img src={logo2} alt="Cafetra" className="img-fluid" />
                    </div>
                    <h3>Log into your account</h3>
                    <div className="cf_form_block">
                        <input type="email" placeholder="Enter Email" className="cf_form_field" onChange={(e) => setEmail(e.target.value)} />
                        <span className="cf_icon cf_mail_green"></span>
                    </div>
                    <div className="cf_form_block">
                        <input type="password" placeholder="Enter Password" className="cf_form_field" onChange={(e) => setPwd(e.target.value)}/>
                        <span className="cf_icon cf_eye_green"></span>
                    </div>
                    {errMsg && (<span className="response_message error">{errMsg}</span>)}
                    {successMsg && (<span className="response_message error">{successMsg}</span>)}
                    <div className="cf_form_block">
                        <div className="cf_flex_box">
                            <div className="cf_remember_block">
                                <input type="checkbox" name="remember_me" id="remember_me" />
                                <label htmlFor="remember_me">
                                    Remember me
                                </label>
                            </div>
                            <div className="cf_forgot_block">
                                <a href="/">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="cf_form_block">
                        <button className="cf_btn" onClick={verifyLogin}>Login</button>
                    </div>
                    <p className="cf_redirect">Don't have an account? <a href="/register">Register now</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login