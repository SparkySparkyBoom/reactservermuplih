import React, { useContext } from 'react';
import './bergaya.css'
import Table from './Table'
import { Link } from 'react-router-dom';
import {TableContext} from './Context'
import { nodeName } from 'jquery';

function Home(){
    const {buka}=useContext(TableContext);
    const [bukaValue,setBukavalue]=buka
    return(    
     <div>       
       {/* isi */}
       <div className={bukaValue?"konten":"konten salah"}>
      <div className="main-container">
      
         <div className="container">
          <Table/>
          <Link to="/tambahtable"><input class="btn btn-primary" type="button" value="Tambahkan Data"/></Link>
         </div>
      
    </div>
    </div>
    </div>
    )
}
export default Home;