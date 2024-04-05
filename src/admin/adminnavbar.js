import React,{Component} from "react";
import { Link } from "react-router-dom";
class Adminnavbar extends Component{
    render(){
        return(
   <header>
<Link to="/adminportal">HOME</Link>
<Link to="/adminportal/eventadd">EVENT</Link>
<Link to="/adminportal/table">CANDIDATES</Link>
<Link to="/adminalumini">ALUMNI</Link>
<Link to="/">LOGOUT</Link>
</header>

        )
    };
};
export default Adminnavbar;