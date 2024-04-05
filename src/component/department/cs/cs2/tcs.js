import React ,{Component}from "react";
import "./cs2.css";
import { Link } from "react-router-dom";
import Navbar from "../../../navbar/navbar";
class TCS extends Component{
   
    render(){
        return(
<div className="contain">
<Navbar/>
<div className="con1">
<div className="company1">
<Link to="#">IBM</Link>

</div><br/>
<div className="company2"><Link to="#">CISCO</Link></div><br/>
<div className="company3"><Link to="#">TCS</Link></div><br/>
<div className="company4"><Link to="#">AMAZON</Link></div><br/>
<div className="company5"><Link to="#">GOOGLE</Link></div><br/>
</div>

<div className="accdatatcs">
<h4>
<h2>ABOUT TCS</h2>
TCS or Tata Consultancy Services is an Indian multinational IT company. It is the second largest Indian company by market value and one of the most respected IT company worldwide.
<h2>RECRUITMENT PROCESS</h2>
TCS hires all year long. They have both On-Campus as well as Off-Campus drives. TCS also conducts multiple exams every year for hiring, including exams like:- TCS NQT(National Qualifier Test)
TCS Digital
TCS Codevitta
TCS iON
<h2>ROUNDS:-</h2>
Most of TCS drives have the following pattern:-
TCS online assessment exam
Technical Interview
HR/MR Interview
<h2>INTERVIEW PROCESS:-</h2>
Mostly TCS conducts either one Interview where they have one Technical session, one HR and one MR session. Or they have two separate rounds, one for Technical and one for HR+MR.
</h4>
<h2>Links</h2>
<a href="https://www.javatpoint.com/tcs-interview-questions">https://www.javatpoint.com/tcs-interview-questions</a>
<h2>Eligibility</h2>
<p>

More than 6 CGPA or 60 % in graduation.
If you have any certification in any programming language ,
Only 1 active backlog but try to avoid any backlog
</p>
</div>
</div>

        )
    };
};
export default TCS;