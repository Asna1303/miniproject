import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword, 
    sendEmailVerification,//signOut
    signInWithEmailAndPassword,
sendPasswordResetEmail} from 'firebase/auth';
import { auth } from "../../config/firebase";
import './auth.css';
const   Auth =()=>{
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const signUp =()=>{

        try{
            const desiredDomain = 'ug.cusat.ac.in';
            if (!email.endsWith(`@${desiredDomain}`)) {
                alert('Email domain is not allowed.');
                return;
              }
           createUserWithEmailAndPassword(auth,email,password).then(()=>{navigate('/home')}).catch(error => {   
            alert(error.message);
         }) 
        }catch(error){
            console.log(error)
        }

    }
    const reset=async()=>{
await sendPasswordResetEmail(auth,email)
    }
    const signIn=()=>{
        try{
            signInWithEmailAndPassword(auth,email,password).then(()=>{navigate('/home')}).catch(error => {   
                alert(error.message);
             })
        }catch(error){
            alert(error)
        }
 
    }
  //const signout=async()=>{ await signOut(auth)}
       
   const verifyEmail=async()=>{await sendEmailVerification(auth.currentUser)}
console.log(auth?.currentUser)
    return(
        <div className="auth_login">
            <input type="text" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <br/><br/>
            <button onClick={signUp}>SIGN UP</button>
            <button onClick={signIn}>SIGN IN</button>
            <button onClick={reset}>    Reset</button>
            <button onClick={verifyEmail}>   VERIFY</button>
           
         
        </div>
    );
};

export default Auth;