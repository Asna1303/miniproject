import { useState } from "react";
import {auth} from './component/config/firebase';
import './component/login/check/auth.css'
import {useNavigate} from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber, 
    //signOut
 } from "firebase/auth";
const Otp=()=>
{
    const navigate=useNavigate();
    const [phone,setPhone]=useState("+91");
    const[otp,setOtp]=useState("");
    const[user,setUser]=useState(null);
    const sendOtp= async()=>{
        try{
            let recaptchaVerifier = await new RecaptchaVerifier("recaptcha",{},auth)
            let confirmation=await signInWithPhoneNumber(auth,phone,recaptchaVerifier);
            console.log(confirmation)
            setUser(confirmation);
        }catch(err){
            console.log(err)
        }
    }
    const verifyOtp=async()=>
    {
        await user.confirm(otp).then(()=>{navigate('/home')})


    }
   // const logout=async()=>{ await signOut(auth) }
    return(
    <div className="auth_login">
        <input type="num"
            placeholder="ph no "
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
        /><br/><br/>
        <button onClick={sendOtp}>send otp</button>
        <div id="recaptcha"></div><br/>
        <input 
            type="text"
            placeholder="enter otp "
            value= {otp}
            onChange={(e)=>setOtp(e.target.value)}

        /><br/><br/>
        <button onClick={verifyOtp}>confirm otp</button>
      
    </div>

);
};
export default Otp;