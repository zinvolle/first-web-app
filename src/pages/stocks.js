import React, {useState, useEffect} from "react";
import './pages.css';
import Table from '../components/table';
import SearchBar from "../components/searchbar";
import { FetchStocksInfo } from "../api/fetchStockApi";

export default function Stocks() {
    const [data, setData] = useState();
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        setLoading(true);
        setError(false);
        const fetch = async () => {
            const stockInfo = await FetchStocksInfo(search);
            setData(stockInfo);
            setLoading(false);
            if(stockInfo.error === true){
                setError(true);
            }
        }
        fetch();
    },[search])

    return (
        <div className="container">
            {
                loading? (
                <div className='container'>
                  <SearchBar onSubmit={setSearch} searchName='Search for industries' type='expandSearch'/>
                <div className="loadingContainer">
                    <h1>
                        Loading
                    </h1>
                </div>
                </div>) : error ? (
                <div className="container">
                <SearchBar onSubmit={setSearch} searchName='Search for industries' type='expandSearch'/>
                <div className="loadingContainer">
                   <h1>
                     {data.message}
                   </h1> 
                </div>
                </div>
                ):(
                <div className="container">
                    <SearchBar onSubmit={setSearch} searchName='Search for industries' type='expandSearch'/>
                    <Table stocks={data}/>
                </div>
                )
            }
        </div>
    )
}