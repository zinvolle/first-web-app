import React from "react";
import chartgraph from '../images/chartgraph.avif'
import './pages.css'

export default function Home() {
    return (
    <div style={{ position: 'relative' }} className="container">
      <img src={chartgraph} alt="chart" style={{ width: '52.9%', marginLeft: '400px' }} />
      <div style={{ position: 'absolute', top: '20%', left: '30%', transform: 'translate(-20%, -20%)', color: 'white' }}>
        <h1>Amos Stocks</h1>
        <h2>Empowering Your Financial Journey</h2>
        <p>Amos Stocks provides real-time market data and intuitive charts</p>
        <p>Join our community and stay informed with accurate insights </p>
        <p>to make smarter investment decisions.</p>
      </div>
    </div>
    )
}