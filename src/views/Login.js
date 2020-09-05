import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import {TableContext} from './Context'
import './bergaya.css'
function Login(){
  const {buka}=useContext(TableContext);
  const [bukaValue,setBukavalue]=buka
    return(
      <div className={bukaValue?"konten":"konten salah"}>
      <div className="main-container">
<div className="container">
  <div className="row">    
    <div className="col">
        <form >
          <h1 class="display-4">LOGIN DULS!!</h1>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                      
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <Link to="/home"><input class="btn btn-primary" type="button" value="Submit"/></Link>          
        </form>
    </div>
  </div>
</div>
</div>
</div>
    )}
export default Login;