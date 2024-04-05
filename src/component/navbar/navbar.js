import React,{Component} from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
class Navbar extends Component{
    render(){
        return(
   <header>
    
<Link to="/home">HOME</Link>
<Link to="/register">REGISTER</Link>
<Link to="/resume">RESUME</Link>
<Link to="/department">DEPARTMENT</Link>
<Link to="/event">EVENT</Link>
<Link to='/eventlist'>NOTIFICATION</Link>
<Link to="/query">QUERY</Link>
<Link to="/">LOGOUT</Link>
</header>

        )
    };
};
export default Navbar;