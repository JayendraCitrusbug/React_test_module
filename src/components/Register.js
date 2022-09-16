import React, { useState, useEffect } from 'react'
import '../templates/assets/css/swiper-bundle.min.css'
import '../templates/assets/css/common.css'
import '../templates/assets/css/login.css'
import '../templates/assets/css/custom.css'
import logo2 from '../templates/assets/images/logo2.svg'
import axios from 'axios'

const EMAIL_REGEX = /^[a-aA-Z][a-azA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [companyRole, setCompanyRole] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = pwd===matchPwd
    if (!result){
      setErrMsg("Confirm Password doesn't match!")
    }else{
      setErrMsg('')
    }
  
  }, [pwd, matchPwd])
  
  
  const verifyRegister = () => {
    let formData = new FormData()
    formData.append("email", email)
    formData.append("password", pwd)
    formData.append("first_name", firstName)
    formData.append("last_name", lastName)
    formData.append("phone", contact)

    axios({
        url: "http://43.204.196.131:9300/api/v1/signup/",
        method: "POST",
        data: formData
    })
    .then((res) => {setErrMsg(''); setSuccessMsg(res.data.message); if(res.data.status===true){setErrMsg(''); setSuccessMsg(''); setSuccess(true); window.location = "/"}})
    .catch((err) => {setSuccessMsg(''); setErrMsg(err.response.data.message);})
}
  

  return (
    <div className="cf_login_wrapper">
      <div className="cf_login_inner">
        <div className="cf_login_block">
          <div className="cf_login_logoBlock">
            <img src={logo2} alt="Cafetra" className="img-fluid" />
          </div>
          <h3>Register your account</h3>
          <div className="cf_form_block">
            <input type="text" placeholder="First Name" className="cf_form_field" onChange={(e) => setFirstName(e.target.value)}/>
            <span className="cf_icon cf_user"></span>
          </div>
          <div className="cf_form_block">
            <input type="text" placeholder="Last Name" className="cf_form_field" onChange={(e) => setLastName(e.target.value)}/>
            <span className="cf_icon cf_user"></span>
          </div>
          <div className="cf_form_block">
            <input type="number" placeholder="Contact" className="cf_form_field" onChange={(e) => setContact(e.target.value)}/>
            <span className="cf_icon cf_call"></span>
          </div>
          <div className="cf_form_block">
            <select className="cf_form_field" defaultValue={'DEFAULT'} onChange={(e) => setCompanyRole(e.target.value)}>
              <option value="DEFAULT" disabled hidden>Company Role</option>
              <option value="Trader">Trader</option>
              <option value="Purchaser">Purchaser</option>
              <option value="Market Analyst">Market Analyst</option>
            </select>
            <span className="cf_icon cf_down_green"></span>
          </div>
          <div className="cf_form_block">
            <select className="cf_form_field" defaultValue={'DEFAULT'} onChange={(e) => setCompanyType(e.target.value)}>
              <option value="DEFAULT" disabled hidden>Company Type</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <span className="cf_icon cf_down_green"></span>
          </div>
          <div className="cf_form_block">
            <input type="email" placeholder="Email" className="cf_form_field" onChange={(e) => setEmail(e.target.value)}/>
            <span className="cf_icon cf_mail_green"></span>
          </div>
          <div className="cf_form_block">
            <input type="password" placeholder="Password" className="cf_form_field" onChange={(e) => setPwd(e.target.value)}/>
            <span className="cf_icon cf_eye_green"></span>
          </div>
          <div className="cf_form_block">
            <input type="password" placeholder="Confirm Password" className="cf_form_field" onChange={(e) => setMatchPwd(e.target.value)}/>
            <span className="cf_icon cf_eye_green"></span>
          </div>
          {errMsg && (<span className="response_message error">{errMsg}</span>)}
          {successMsg && (<span className="response_message error">{successMsg}</span>)}
          <div className="cf_form_block">
            <button className="cf_btn" onClick={verifyRegister}>Register</button>
          </div>
          <p className="cf_redirect">Have an account? <a href="/">Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register