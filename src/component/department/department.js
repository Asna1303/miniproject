import React,{Component} from "react";
import "./department.css"
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
class Department extends Component{
    render(){
        return(
            <div className="b1">
             <Navbar/>
                <div className="card">
                    <div className="dep">
                    
                  <h3>COMPUTER SCIENCE & ENGINEERING </h3>  
                    
                    
                    <Link to="/alumini">PLACED__STUDENTS</Link>
                    <br/><br/>
                    <Link to="/department/cs/cs2">CSE_TOP_RECRUITERS</Link>
                    <br/><br/>
                    <Link to="/department/cs/mock">MOCK_TEST</Link>
                    </div>
                    <div className="dep">
                    <h3>
                    INFORMATION TECHNOLOGY
                    </h3>
                    <Link to="#">PLACED__STUDENTS</Link>
                    <br/><br/>
                    <Link to="#">IT_TOP_RECRUITERS</Link> 

                    <br/><br/>
                    <Link to="#">MOCK_TEST</Link>
                    </div>
                    <div className="dep">
                    <h3>  CIVIL ENGINEERING</h3>
                  
                    
                    <Link to="#">PLACED__STUDENTS</Link>
                    <br/><br/>
                    <Link to="#">CIVIL_TOP_RECRUITERS</Link> 

                    <br/><br/>
                    <Link to="#">MOCK_TEST</Link>
                    </div>
                    <div className="dep">
                    <h3> MECHANICAL ENGINEERING</h3>
                   
                    <Link to="#">PLACED__STUDENTS</Link>
                    <br/><br/>
                    <Link to="#">MECHANICS_TOP_RECRUITERS</Link>
                        
                    <br/><br/>
                    <Link to="#">MOCK_TEST</Link>
                    
                    </div>
                    <div className="dep">
                    <h3> ELECTRICAL&ELECTRONICS ENGINEERING</h3>
                   
                    <Link to="#">PLACED__STUDENTS</Link>
                    <br/><br/>
                    <Link to="#">EEE_TOP_RECRUITERS</Link>
                        
                    <br/><br/>
                    <Link to="#">MOCK_TEST</Link>
                    
                    </div><div className="dep">
                    <h3>FIRE&SAFETY ENGINEERING</h3>
                   
                    <Link to="#">PLACED__STUDENTS</Link>
                    <br/><br/>
                    <Link to="#">S&F_TOP_RECRUITERS</Link>
                        
                    <br/><br/>
                    <Link to="#">MOCK_TEST</Link>
                    
                    </div>
                </div>
            </div>
        )
    };
};
export default Department;