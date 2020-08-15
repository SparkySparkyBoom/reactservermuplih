import React, { useState } from 'react';
import {Button,Navbar,Nav} from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import Home from './Home';
function Tambahtable() {
  const [nama,setNama]=useState(' ');
  const [barang,setBarang]=useState(' ');
  const [harga,setHarga]=useState(' ');
  const [tanggal,setTanggal]=useState(' ');
  const [status,setStatus]=useState(' ');
  const [bulan,setBulan]=useState(' ');
  function handleChange(){

  }
    return(
      <Router>
        <form>
          <div className="main-container">           
           <h3>Masukkan Input yang anda inginkan</h3>
            <div className="form-group">
            <label>
              Nama:
              <input type="text"className="form-control" value={nama} onChange={handleChange} />
            </label></div>
            <div className="form-group"><label>
              Barang:
              <input type="text"className="form-control" value={barang} onChange={handleChange} />
            </label></div>
            <div className="form-group"><label>
              Harga Barang:
              <input type="text"className="form-control" value={harga} onChange={handleChange} />
            </label></div>
            <div className="form-group"><label>
              Tanggal:
              <input type="text"className="form-control" value={tanggal} onChange={handleChange} />
            </label></div>
            <div className="form-group"><label>
              Status:
              <input type="date"className="form-control" value={status} onChange={handleChange} />
            </label></div>
            <div className="form-group"><label>
              Bulan:
              <input type="number"class="form-control" value={bulan} onChange={handleChange} />
            </label></div>
       </div>
        <Button><Link to="/Home">Submit</Link></Button>
        </form>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
        </Switch>
        </Router>
    )
}
export default Tambahtable;