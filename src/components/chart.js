import {Chart as ChartJS, BarElement, TimeScale, LinearScale, PointElement, Tooltip, Legend, Title} from 'chart.js'
import 'chartjs-adapter-date-fns';
ChartJS.register(BarElement, TimeScale, LinearScale, PointElement, Tooltip, Legend, Title)
ChartJS.defaults.color = 'white'

export default function Options(stocks, name){
    var stockdates;
    var errorMessage;
    if (stocks.error !== true){
      stockdates = stocks.map((singleStock) => {return {x: singleStock.timestamp, y: [singleStock.low, singleStock.high]}});
      stockdates.reverse();

    }
    else{
      errorMessage = stocks.message;
    }
    if (stocks.length === 0){
      errorMessage = 'There is no stock data after this time frame';
    }
    const data = {
      datasets: [{
          label: 'Stock prices',
          data: stockdates,
          backgroundColor: ['rgba(255, 205, 86)'],
          borderWitdh: 1,
          color:'white'
      }]
    }
    const config = {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: (stocks.error === true) ? null : name,
          font:{
            size: 40,
            color: 'white',
          }
        },
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'week',
          },
          grid:{
            color: 'rgba(255,255,255, 0.2)'
          },
        },
        y: {
          title:{
            display: true,
            text: 'Price ($)',
            font: {
              size: 30
            }
          },
          grid:{
            color: 'rgba(255,255,255, 0.2)'
          },
        },
      }
    } 
   return {config,data, stockdates, errorMessage, };
  }