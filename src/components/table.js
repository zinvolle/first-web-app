import {AgGridReact} from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './component.css';


const columns = [
    {headerName: 'Symbol', field: 'symbol', sortable: true, resizable: false},
    {headerName: 'Name', field: 'name', sortable: true, resizable: false},
    {headerName: 'Industry', field: 'industry', sortable:true, filter:true, flex: 1, resizable: false}
  ]



export default function Table(props){  

  if('error' in props.stocks){
      return (
        <div>
          <p1>Error: {props.stocks.message}</p1>
        </div>
      )
    }
    const unique = uniqueObjects(props.stocks)
      
    return (
      <div  className='ag-theme-alpine ag-custom-class' style={{
        height: '550px',
        width:'700px',
      }}>
        <AgGridReact columnDefs={columns} rowData={unique} pagination={true} paginationPageSize={10}/>
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