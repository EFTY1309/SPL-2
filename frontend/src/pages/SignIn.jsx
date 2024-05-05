import React, { useState } from 'react';
import './CSS/SignIn.css'

const SignIn = () => {
  console.log("hello world");

  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
    console.log("Login function executed",formData)

    let responseData;
    await fetch('http://localhost:4003/login',{
     method:'POST',
     headers:{
       Accept:'application/form-data',
       'Content-Type':'application/json',
     },
     body:JSON.stringify(formData),    
 }).then((response)=>response.json()).then((data)=>responseData=data)
 
 if(responseData.success){
   localStorage.setItem('auth-token',responseData.token);
   window.location.replace("/home");
 }
 else{
   alert(responseData.errors)
 }

}

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign in to Dhaka University Swimming Pool</h1>
        <div className="loginsignup-fields">
          <label htmlFor="email">Email</label>
          <input type="email" value={formData.email} id="Email" name="email" onChange={changeHandler} />
          <label htmlFor="password">Password</label>
          <input type="password" value={formData.password} id="Password" name="password" onChange={changeHandler}/>
        </div>
        <div className='forget-password'>
          Forgot your password?
        </div>
        <button onClick={login} >Sign In</button>
      </div>
      
    </div>
  )
}

export default SignIn
