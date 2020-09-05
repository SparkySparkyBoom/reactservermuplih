import React, {Component, createContext, useState, useMemo} from 'react';
import 'datatables.net-dt/css/jquery.dataTables.css';

export const TableContext=createContext();

export function TableProvider(props) {
    const [dataSet,setDataset] = useState([
        {
              id: 1,
              nama: "Tiger Nixon",
              barang: "lemari",
              harga: "Rp 6000",
              tanggal: "2018/04/25",
              status: "lunas",
              bulan: 8,
        },
      {
              id: 2,
              nama: "mega pro",
              barang: "kulkas",
              harga: "Rp 7000",
              tanggal: "2019/04/25",
              status: "dp",
              bulan: 9,
       },
       {
              id: 3,
              nama: "Bison terbang",
              barang: "mobil",
              harga: "Rp 5000",
              tanggal: "2017/04/25",
              status: "nyicil",
              bulan: 3,
        },            
    ])
    const [buka,setBukasidebar]=useState(false);
    
    
    return(
        <TableContext.Provider value={{dataSet:[dataSet,setDataset],buka:[buka,setBukasidebar]}}>
            {props.children}
        </TableContext.Provider>
    )
}
