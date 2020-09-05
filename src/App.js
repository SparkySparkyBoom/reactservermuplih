import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './views/Header'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import Home from './views/Home'
import TambahTable from './views/TambahTable'
import Login from './views/Login'
import {TableProvider} from './views/Context'
function App() {  
  
  return (
     <TableProvider>
       <Router>
    <div >
    <Header />
    
    </div>
    <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/home" component={Home} />
      <Route path="/tambahtable" component={TambahTable}/>
    </Switch>                   
    </Router>
    </TableProvider> 
    
  );
}
export default App;