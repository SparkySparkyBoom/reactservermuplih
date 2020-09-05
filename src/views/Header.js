import React,{useState, useContext} from 'react';
import {Link } from 'react-router-dom'
import './bergaya.css'
import {TableContext} from './Context'

function Header() {
    const {buka}=useContext(TableContext);
    const [bukaValue,setBukavalue]=buka
    function openSidebar(){
        setBukavalue(!bukaValue);
    }
    return(
    <>     
    {/* Sidebar */}
    <div class={bukaValue?"wrapper":"wrapper benar"}>
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
               <li class="item"><Link to="/home">
                   <a href="#" class="menu-btn">
                    <i class="fas fa-desktop"></i><span>Dashboard</span>
                   </a></Link>
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
   </div>
    </>    
    )
}
export default Header;