const API_KEY_STOCK = '1oeViSb1Ke71OdGDjnuVF2G8pYJbOmtb313DyxUL'
const urlAll = `https://aij1hx90oj.execute-api.ap-southeast-2.amazonaws.com/prod/all`; 
const urlSearch = `https://aij1hx90oj.execute-api.ap-southeast-2.amazonaws.com/prod/industry?industry=`; 
const urlSearchName = `https://aij1hx90oj.execute-api.ap-southeast-2.amazonaws.com/prod/history?symbol=`; 
const urlSearchByDate = `https://aij1hx90oj.execute-api.ap-southeast-2.amazonaws.com/prod/history?symbol=`; 


export async function FetchStocksInfo(search) {
  const apiEndpoint = search? urlSearch+search:urlAll
  try{
  var res = await fetch(apiEndpoint, {
    method: 'GET',
    headers:{
        'x-api-key': API_KEY_STOCK
    }
});
  const data = await res.json();
  return data;
  } catch (err) {
    return {error: true, 'message': err.message};
  }
}

export async function FetchStockData(search) {
  try{
  var res = await fetch(urlSearchName+search, {
    method: 'GET',
    headers:{ 
        'x-api-key': API_KEY_STOCK
    }
});
  const data = await res.json();
  return data;
} catch (err){
  return {'error': true, 'message': err.message}
}}

export async function FetchStockDataFrom(stock, date) {
  
  try{
  var res = await fetch( urlSearchByDate+stock+'&from='+date, {
    method: 'GET',
    headers:{ 
        'x-api-key': API_KEY_STOCK
    }
});
  const data = await res.json();
  return data;
} catch (err){
  return {'error': true, 'message': err.message}
}}