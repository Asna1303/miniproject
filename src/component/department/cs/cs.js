import React ,{Component}from "react";
import "./cs.css";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/navbar";
class Cs extends Component{
    render(){
        return(
<div className="cont">
<Navbar/>
<div className="div1">
  <Link to="/department/cs/cs1">PLACED_STUDENTS</Link>
</div>
<div className="div2">
  <Link to="#">TOP_RECRUITERS</Link>
</div>
</div>
        )
    };
};
export default Cs;