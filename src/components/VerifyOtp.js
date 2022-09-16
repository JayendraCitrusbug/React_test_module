import React, { useState } from 'react'
import logo2 from '../templates/assets/images/logo2.svg'
import axios from 'axios'

const VerifyOtp = () => {
    const [otp, setOtp] = useState('')
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const verifyOtp = () => {
        let formData = new FormData()
        formData.append("otp", otp)
        formData.append("unique_id", "c020eec7-86bf-4daa-b5e1-afe902c3779d")

        axios({
            url: "http://43.204.196.131:9300/api/v1/otp-verify/",
            method: "POST",
            data: formData
        })
        // console.log(res.data.data.first_name);
        .then((res) => {
            setErrMsg(''); 
            setSuccessMsg(res.data.message); 
            if(res.data.status===true){
                setErrMsg(''); 
                setSuccessMsg(''); 
                setSuccess(true);
                console.log(res.data.data);
                let user_details = res.data.data;
                localStorage.setItem("id",user_details.id);
                localStorage.setItem("email",user_details.email);
                localStorage.setItem("first_name",user_details.first_name);
                localStorage.setItem("last_name",user_details.last_name);
                localStorage.setItem("access",user_details.access);
                localStorage.setItem("refresh",user_details.refresh);
                window.location = "/home"
            }
        })
        .catch((err) => {
            setSuccessMsg(''); 
            setErrMsg(err.response.data.message);
        })
    }

    return (
        <div className="cf_login_wrapper">
            <div className="cf_login_inner">
                <div className="cf_login_block cf_forgot_block">
                    <div className="cf_login_logoBlock">
                        <img src={logo2} alt="Cafetra" className="img-fluid" />
                    </div>
                    <h3>Please Enter OTP</h3>
                    <span className="login_subline">Please check your Email, We have sent an OTP number.</span>
                    <div className="cf_form_block">
                        <input type="number" placeholder="Enter OTP" className="cf_form_field" onChange={(e)=>setOtp(e.target.value)}/>
                    </div>
                    {errMsg && (<span className="response_message error">{errMsg}</span>)}
                    {successMsg && (<span className="response_message error">{successMsg}</span>)}
                    <div className="cf_form_block">
                        <button className="cf_btn" onClick={verifyOtp}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp