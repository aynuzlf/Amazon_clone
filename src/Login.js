import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from './Firebase';
import"./Login.css"
export default function Login() {
    const history=useNavigate()
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const signIn=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history('/')
            }
        })
        .catch((error)=>alert(error.message))

    }

    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history('/')
            }
        })
        .catch((error)=>alert(error.message))

    };
  return (
    <div className='login'>
        <Link to="/">
<img className='login__logo' src='https://kfinancial.com/wp-content/uploads/2019/02/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpg' alt=''/>
</Link>
<div className='login__container'>
    <h1>sign-in</h1>
    <form>
        <h5>E-mail</h5>
        <input
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button
        type='submit'
        onClick={signIn}
        className="login__signInButton">
            sign In
             </button>
    </form>
    <p>by signing in u can agree the policy of this clone,please the see the privacy policies and user agreements</p>
    <button onClick={register} className="login__registration">
create you Amazon account
    </button>

</div>
    </div>
  )
}
