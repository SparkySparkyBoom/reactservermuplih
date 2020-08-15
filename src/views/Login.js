import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import {Home} from '../views'

function Login(props){   
    return(
<Router>
  <div style={{background: "yellow"}}>
<div className="container" style={{height:"100%",background: "rgb(29, 187, 29)",padding:"90px 40px 60px"}}>
  <div className="row">
    <div className="col">      
      <span style={{color: "#0D293C",fontSize: "90px",fontWeight: "700"}}><strong>Bantu</strong></span><span style={{color:" #FFC404",fontSize: "90px",fontWeight: "700"}}><strong>Cicil</strong></span>
    </div>
    <div className="col">
        <form >
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
          <button type="submit" class="btn btn-primary"><Link to="/Home">Submit</Link></button>
        </form>
    </div>
  </div>
</div></div>

<Switch>
  <Route  path="/Home">
    <Home/>
  </Route>
</Switch>
</Router>
    )}
export default Login;