import React,{Component} from "react";
import "./portal.css"
import Adminnavbar from "./adminnavbar";
class AdminPortal extends Component{
    render(){
        return(
            <div className="main">
             <Adminnavbar/>
            <div className="hm">
            <h1>  Welcome to the Admin Portal of Place-Me</h1>
            <hr/>
                <h3>
            This portal empowers you with essential functions and tools to manage student details, communicate important notifications, and oversee upcoming events and companies. With a user-friendly interface, you can easily navigate through the student database, ensuring accurate information and personalized support. Communicate with students effectively by sending timely notifications and announcements, keeping them informed about deadlines and workshops. Stay organized by managing upcoming events and companies, providing students with valuable insights and opportunities. The Admin Portal is your gateway to 
                streamlined administration and meaningful student engagement, creating a seamless placement experience for all.
                </h3>
            </div>
            </div>
        )
    };
};
export default AdminPortal;