import React,{useState} from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import {Button,Navbar,Nav, Tab} from 'react-bootstrap'
import styled from 'styled-components'
import LeftBar from './LeftToggle'
import './bergaya.css'
import Table from './Table'
import {TambahTable} from '../views'
import Tambahtable from './TambahTable'

// const Nav=styled.nav`
// width:100%;
// height:65px;
// border-bottom: 2px solid #f1f1f1;
// padding:0 20px;
// display:flex;
// justofy-content:space-between;
// `;
function Header() {
    const [buka,setBukasidebar]=useState(false);
    function openSidebar(){
        setBukasidebar(!buka);
        console.log(buka);
    }
    return(
    <Router>     
    {/* Sidebar */}
    <div class={!buka?"wrapper":"wrapper benar"}>
       <div class="header">
           <div class="header-menu">
               <div class="title">Benar <span>Sekali</span></div>
               <div class="sidebar-btn" onClick={openSidebar}>
                <i class="fas fa-bars"></i>
               </div>
               <ul>
                   <li><a href="#"><i class="fas fa-search"></i></a></li>
                   <li><a href="#"><i class="fas fa-bell"></i></a></li>
                   <li><a href="#"><i class="fas fa-power-off"></i></a></li>
               </ul>
           </div>  
       </div>
{/* <!-- sidebar --> */}
       <div class="sidebar">
           <div class="sidebar-menu">
               <div class="profile">
               <img style={{width: "100px",height: "100px"}} src={"imgonline-com-ua-CompressToSize-kcLy7pdg54s2Lg.jpg"}/>
                   <p>Novagia</p>
               </div>
               <li class="item">
                   <a href="#" class="menu-btn">
                    <i class="fas fa-desktop"></i><span>Dashboard</span>
                   </a>
               </li>
               <li class="item" id="profile">
                <a href="#profile" class="menu-btn">
                 <i class="fas fa-user-circle"></i><span>Profile</span>
                </a>
                
                </li>
                <li class="item" id="messages">
                    <a href="#messages" class="menu-btn">
                     <i class="fas fa-envelope"></i><span>Message</span>
                    </a>
                    
                </li>
                <li class="item" id="settings">
                    <a href="#settings" class="menu-btn">
                     <i class="fas fa-cog"></i><span>Settings</span>
                    </a>
                    
                </li>
                <li class="item" >
                    <a href="#" class="menu-btn">
                     <i class="fas fa-info-circle"></i><span>About</span>
                    </a>
                </li>
           </div>
       </div>
       {/* <!-- isi --> */}
       <div class="main-container">           
           <div class="container">
               <h4>Pilih berapa baris yang ingin dihitung</h4>               
               <h2>Simple Pagination Example using Datatables Js Library</h2><br/>
               <Route path="/" component={Table} exact/>
                <Route path="/tambahtable" component={TambahTable}/>
               
                <button type="submit"><Link to="/tambahtable">Tambah Data</Link></button>
           </div>
           
       </div>
       
   </div>
    {/* isi */}
    <Switch>
        <Route path="/tambahtable">
            <TambahTable />
        </Route>
    </Switch>
    </Router>    
    )
}
export default Header;