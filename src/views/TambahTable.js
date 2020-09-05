import React, { useState,useContext } from 'react';
import {TableContext} from './Context'
import './bergaya.css'

function TambahTable() {
  const {buka,dataSet}=useContext(TableContext);
  const [datasetValue,setDatasetvalue]=dataSet;
  const [bukaValue,setBukavalue]=buka;
  const [nama,setNama]=useState('');
  const [barang,setBarang]=useState('');
  const [harga,setHarga]=useState('');
  const [tanggal,setTanggal]=useState('');
  const [status,setStatus]=useState('');
  const [bulan,setBulan]=useState(0);
  
  function updateNama(event){
    setNama(event.target.value);
  }
  function updateBarang(event){
    setBarang(event.target.value);
  }
  function updateHarga(event){
    setHarga(event.target.value);
  }
  function updateTanggal(event){
    setTanggal(event.target.value);
  }
  function updateStatus(event){
    setStatus(event.target.value);
  }
  function updateBulan(event){
    setBulan(event.target.value);
  }
  function tambah(event){
    event.preventDefault();    
    setDatasetvalue(prev=>[...prev,{nama:nama,barang:barang,harga:harga,tanggal:tanggal,status:status,bulan:bulan}]);
  }
    return(
      <div className={bukaValue?"konten":"konten salah"}>
      <div className="main-container">
      <div className="container">
        <form onSubmit={tambah}>          
           <h3>Masukkan Input yang anda inginkan</h3>
            <div class="form-group">
            <label for="nama1">Nama:</label>
            <input type="email" class="form-control" id="nama1" value={nama} onChange={updateNama}/>
            </div>
            <div className="form-group">
              <label for="barang1">Barang:</label>
              <input type="text"className="form-control"id="barang1" value={barang} onChange={updateBarang} />            
            </div>
            <div className="form-group">
              <label for="harga1">Harga Barang:</label>
              <input type="text"className="form-control"id="harga1" value={harga} onChange={updateHarga} />            
            </div>
            <div className="form-group">
              <label for="tanggal1">Tanggal:</label>
              <input type="date"className="form-control" id="tanggal1" value={tanggal} onChange={updateTanggal} />
            </div>
            <div className="form-group">
              <label for="status1">Status:</label>              
              <input type="text"className="form-control"id="status1" value={status} onChange={updateStatus} />            
            </div>
            <div className="form-group">
              <label for="bulan1">Bulan:</label>              
              <input type="number"class="form-control"id="bulan1" value={bulan} onChange={updateBulan} />            
            <br/>
            <input type="submit" class="btn btn-primary" value="Tambahkan data"/>
         </div>
         
        </form>
        </div>
        </div>
        </div>
    )
}
export default TambahTable;