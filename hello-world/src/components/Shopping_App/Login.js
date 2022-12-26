import React, { useState } from 'react'
import '../../components/Shopping_App/Signup.css'

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    passWord: "",
  })
  const formSubmit = (e) => {
    e.preventDefault();
    
    setLoginData(loginData);
}
console.log(loginData);
  const formChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
}
  return (
    <div>
      <form>
        <div class="container">
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          <label>Username : </label>
          <input type="text" placeholder="Enter Username" name="userName" value={loginData.userName} onChange={formChange}  required />
          <label>Password : </label>
          <input type="password" placeholder="Enter Password" name="passWord" value={loginData.passWord} onChange={formChange} required />
          <button className='registerbtn' type="submit" onClick={formSubmit}>Login</button>
          <div style={{ textAlign: 'center' }} ><a href="/signup" > Signup </a>   </div>
        </div>
      </form>
    </div>
  )
}

export default Login