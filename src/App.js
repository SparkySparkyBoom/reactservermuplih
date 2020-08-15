import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import {Home} from './views'
import {Form,Button} from 'react-bootstrap'
import Login from './views/Login'
import Tbl from './views/Table'
import Header from './views/Header'
function App() {
  const[check,setCheck]=useState(true);
  function ganti() {
    setCheck(false)
  }
  
  return (    
    <div >
      <Home/>
      {/* {check?<Login onClick={ganti}/>:<Home/>}
      <Table data={dataset}/> */}
    </div>     
  );
}
export default App;