import React from "react";
import "./dashboard.css"
import { Link } from "react-router-dom";

function Dashboard() {
 
 

  return (
    <div className='dash'>
    <div className="titleName">
        <h1>WELCOME TO PLACE_ME</h1>
        <h2>YOUR CENTRAL HUB FOR PLACEMENT</h2>
        <hr/>
    </div>
    <div className="dashcont">
    <div className="student">
        <div className="lg"></div><br/>
        <button>
        <Link to="/auth">STUDENT DASHBOARD</Link>
        </button>
    </div>
    <div className="admin">
    <div className="ag"></div><br/>
        <button>
        <Link to="/authi">ADMIN DASHBOARD</Link></button>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;
