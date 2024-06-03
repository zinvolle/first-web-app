import {AgGridReact} from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './component.css';


const columns = [
    {headerName: 'Date', field: 'timestamp', sortable: false, flex:1, resizable: false},
    {headerName: 'High', field: 'high', sortable: false, resizable: false},
    {headerName: 'Low', field: 'low', sortable:false, filter:false, resizable: false},
    {headerName: 'Closing', field: 'close', sortable:false, filter:false,resizable: false},
    {headerName: 'Volume', field: 'volumes', sortable:false, filter:false, resizable: false}
  ]

export default function StockTable(props){  

    if(props.stockData.error === true){
        return;
    }

    return (
      <div  className='ag-theme-alpine ag-custom-class' style={{
        height: '550px',
        width:'1000px',
        marginTop:'20px',
      }}>
        <AgGridReact columnDefs={columns} rowData={props.stockData} pagination={false} paginationPageSize={10}/>
      </div>
    )
  }
  
  const uniqueObjects = (array) => {
    const seenNames = new Set();
    return array.filter((obj) => {
      if (!seenNames.has(obj.name)) {
        seenNames.add(obj.name);
        return true;
      }
      return false;
    });
  };