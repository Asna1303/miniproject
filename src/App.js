import React, { Component } from 'react';
import './App.css';
import Home from './component/home/home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Department from './component/department/department';
import Query from './component/query/query';
import Footer from './component/footer/footer';
import Cs from './component/department/cs/cs';
import Mech from './component/department/civil/civil';
import Civil from './component/department/civil/civil';
import Info from './component/department/it/it';
import Cs1 from './component/department/cs/cs1/cs1';
import Cs2 from './component/department/cs/cs2/cs2';
import Mock from './component/department/cs/mock/mock';
import TodoWrapper from './component/event/event';
import ResumeCreator from './component/resume/resume';
import TCS from './component/department/cs/cs2/tcs';
import Auth from './component/login/check/Auth';
import Otp from './otp';
import Alumini from './component/alumini/alumini';
import RegistrationForm from './component/register';
import RegistrationTable from "./component/table";
import Dashboard from './dashboard';
import Authi from './component/login/check/Authi';
import TodoAdder from './admin/EventAdder';
import TodoList from './admin/EventList';
import AdminPortal from './admin/AdminPortal';
import AluminiAdmin from './admin/AluminiAdmin';
import ChatScreen from "./component/ChatScreen";
class  App extends Component{

  render(){
    return (
    <div className="App">
             <Router>
              <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path='/' element={<Dashboard/>}/>
              <Route path="/auth" element={<Auth/>} />
              <Route path='/authi' element={<Authi/>}/>
              <Route path='/adminportal' element={<AdminPortal/>}/>
              <Route path='/adminalumini' element={<AluminiAdmin/>}/>
              
             
              <Route path='/otp' Component={Otp}/>
              <Route path='department/cs/cs1' Component={Cs1}/>
              <Route path='/department/cs/TCS' Component={TCS}/>
              <Route path='/department/cs/mock' Component={Mock}/>
              <Route path='/event' Component={TodoWrapper}/>
              <Route path='department/cs/cs2' Component={Cs2}/>
              <Route path='/department/mech' Component={Mech}/>
              <Route path='/department/civil' Component={Civil}/>
              <Route path='/department/info' Component={Info}/>
              <Route path="/query" Component={Query} />
              <Route path="/Chat" component={ChatScreen}/>
              <Route path="/alumini" Component={Alumini} />
              <Route path='/department/cs' Component={Cs}/>
              <Route path="/resume" element={<ResumeCreator/>} />  
              <Route path="/department" element={<Department/>} />
              <Route path="/register" element={<RegistrationForm/>} />
              <Route path="/adminportal/table" element={<RegistrationTable/>} />
              <Route path='/adminportal/eventadd' element={<TodoAdder/>}/>
              <Route path='/eventlist' element={<TodoList/>}/>
              <Route path="*" element={<p>Path not resolved</p>} />
              
              </Routes>
          

            <Footer/>
              
              </Router>
    </div>
  )
};

  };
  

export default App;
