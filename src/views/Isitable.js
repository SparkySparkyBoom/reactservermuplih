
import 'datatables.net-dt/css/jquery.dataTables.css'; // this works
import React, { Component } from 'react'
import ReactDOM from "react-dom";

const $ = require("jquery");
$.DataTable = require("datatables.net");
const columns = [
{ title: "Name", data:'name' },
{ title: "Position", data:'position'  },
{ title: "Office", data:'office' },
{ title: "Extn.", data: 'ext' },
{ title: "Start date", data:"date" },
{ title: "Salary", data: 'salary' },
];

class Isitable extends Component {
  constructor(props) {
       super(props);
    }
 componentDidMount() {
      this.$el = $(this.el);
      this.$el.DataTable(
        {
            data: this.props.data,
            columns: [
                { title: "Nama", data:'nama' },
                { title: "Barang", data:'barang'  },
                { title: "Harga", data:'harga' },
                { title: "Tanggal", data: 'tanggal' },
                { title: "Status", data:"status" },
                { title: "Bulan", data: 'bulan' },
                ]
        }
    )}
    render() {
        return <div>
            <table className="table table-fluid display" width="100%" ref={el => this.el = el}>
            </table>
        </div>
    }
}
export default Isitable;