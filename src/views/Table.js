import React, {Component, useContext} from 'react';
import ReactDOM from "react-dom";
import 'datatables.net-dt/css/jquery.dataTables.css';
import Isitable from './Isitable'
import {TableContext} from './Context'

const $ = require('jquery')
$.Datatable = require('datatables.net')
export default function Table() {
  const {dataSet}=useContext(TableContext);
  const [datasetValue,setDatasetvalue]=dataSet;
  return (
    <div className="App">
       <h4>Pilih berapa baris yang ingin dihitung</h4>               
        <h2>Simple Pagination Example using Datatables Js Library</h2><br/>
        <Isitable data={datasetValue}/>        
      </div>
  )
}

// export default class Table extends Component {
//     constructor(props) {
//         super(props);
//         const dataSet = [
//             {
//                   id: 1,
//                   name: "Tiger Nixon",
//                   position: "System Architect",
//                   office: "Edinburgh",
//                   ext: 5421,
//                   date: "2011/04/25",
//                   salary: "$320,800",
//             },
//           {
//                   id: 2,
//                   name: "Garrett Winters",
//                   position: "Accountant",
//                   office: "Tokyo",
//                   ext: 8422,
//                   date: "2011/07/25",
//                   salary: "$170,750",
//            },
//            {
//                   id: 3,
//                   name: "Ashton Cox",
//                   position: "Junior Technical Author",
//                   office: "San Francisco",
//                   ext: 1562,
//                   date: "2009/01/12",
//                   salary: "$86,000",
//             },            
//         ]
// this.state = {
//          data: dataSet
//     };
// }
// deleteRow = (id) => {
//   const filteredData = this.state.data.filter((i) =>  i.id !== id);
//   this.setState({data: filteredData});
// };
// render() {
//     return (
//       <div className="App">        
//         <Isitable data={this.state.data}/>        
//       </div>
//     );
//   }
// }   