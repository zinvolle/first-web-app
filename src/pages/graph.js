import React, {useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { FetchStockData, FetchStockDataFrom } from "../api/fetchStockApi";
import SearchBar from "../components/searchbar";
import Options from "../components/chart";
import StockTable from '../components/stockDataTable';


export default function Graph() {
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [stockDates, setStockDates] = useState();
    const [config, setConfig] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [stockData, setStockData] = useState();
    const [stockName, setStockName] = useState();
    const [searchDate, setSearchDate] = useState();

    useEffect(()=>{
        setLoading(true);
        const fetch = async()=>{
            const stockdata = await FetchStockData(search);
            var stockname;
            if(stockdata.error !== true){
                stockname=stockdata[0].name;
                setStockName(stockname);
            }
            setStockData(stockdata);
            const { config, data, stockdates, errorMessage } = Options(stockdata, stockname);
            setConfig(config);
            setData(data);
            setStockDates(stockdates);
            setErrorMessage(errorMessage);
            setLoading(false);
        }
        fetch();
    },[search]);

    useEffect(()=>{
        const fetch = async()=> {
            const stockdata = await FetchStockDataFrom(search,searchDate);
            if (stockdata.error === true){
                setErrorMessage(stockdata.message);
                return;
            }
            const { config, data, stockdates, errorMessage } = Options(stockdata, stockName);
            setConfig(config);
            if (stockdates && stockdates.length > 0){
             setStockData(stockdata);
             setData(data);
            }
            setStockDates(stockdates);
            setErrorMessage(errorMessage);
            setLoading(false);
        }
        fetch();
    }, [searchDate]);

    return (
        <div className="container">
            <SearchBar onSubmit={setSearch} searchName='Search for stocks' type='expandSearch'/>
            {loading ? (<div className="loadingContainer">
                    <h1>
                        Loading...
                    </h1>
                </div>) : 
            (stockDates) ? (
            <div>
              <div style={{width:'1000px', height:'500px'}}> 
                <Bar options={config} data={data}  />
              </div>
                <div style={{display:'flex', flexDirection:'row', marginTop:'20px', }}>
                    <h2 style={{color:'white'}}>
                        Search from date (YYYY-MM-DD):
                    </h2>
                    <SearchBar onSubmit={setSearchDate} searchName='Search from date' type='timeFrameSearch'/>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignSelf:'center', justifyContent:'center'}}>
                    <p1 style={{color:'white'}}>
                        {errorMessage}
                    </p1>
                </div>
                <div style={{justifyContent:'center'}}>
                    <StockTable stockData={stockData}/>
                </div>
              </div>
              ) : 
            (<div className="loadingContainer">
            <h1>
                {errorMessage}
            </h1>
        </div>)}
        </div>
    )
}