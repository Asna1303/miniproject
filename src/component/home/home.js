import React,{Component} from "react";
import "./home.css"
import Navbar from "../navbar/navbar";


class Home extends Component{
    
    render(){
        return(
            
<div className="b1">

<Navbar/>
    <div className="card">
        <div className="card1">
       <h3> STUDENTS</h3>

Empowers students to create job profiles, search, and apply for jobs and internships; 
instant job matching that takes their career to the next level.
        </div>
        <div className="card2">
      <h3> PLACEMENT TEAMS</h3> 
Attract several companies and manage them from a centralized place;
 capture data and reports related to students and employers in a single click, securely.
        </div>
        <div className="card3">
        <h3>COMPANIES</h3>

Create multiple job postings and get instant access to the entire students' database</div>
    </div>
</div>
        )
    };
};
export default Home;