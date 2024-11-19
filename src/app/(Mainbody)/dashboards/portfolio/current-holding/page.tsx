"use client"

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

interface Holding {
  name: string
  symbol: string
  quantity: number
  currentPrice: number
  change: number
  color: string
}


// const holdings: Holding[] = [
//   { name: "Reliance Industries", symbol: "RELIANCE", quantity: 15, currentPrice: 2480.75, change: 1.3, color: "#A2D2FF" },
//   { name: "Tata Consultancy Services", symbol: "TCS", quantity: 10, currentPrice: 3251.20, change: -0.5, color: "#FEF9EF" },
//   { name: "HDFC Bank", symbol: "HDFCBANK", quantity: 20, currentPrice: 1445.50, change: 0.8, color: "#FF865E" },
//   { name: "Infosys Ltd", symbol: "INFY", quantity: 25, currentPrice: 1487.65, change: -1.2, color: "#FEE440" },
//   { name: "ICICI Bank", symbol: "ICICIBANK", quantity: 30, currentPrice: 869.30, change: 2.0, color: "#98DDCA" },
//   { name: "State Bank of India", symbol: "SBIN", quantity: 50, currentPrice: 574.90, change: -0.9, color: "#FFCCB6" },
//   { name: "Bharti Airtel", symbol: "BHARTIARTL", quantity: 40, currentPrice: 701.25, change: 1.5, color: "#FFABAB" },
//   { name: "Asian Paints", symbol: "ASIANPAINT", quantity: 12, currentPrice: 2962.90, change: 0.6, color: "#FFD3B4" },
//   { name: "Hindustan Unilever", symbol: "HINDUNILVR", quantity: 18, currentPrice: 2537.10, change: -1.0, color: "#D4A5A5" },
//   { name: "Axis Bank", symbol: "AXISBANK", quantity: 22, currentPrice: 1188.75, change: 2.3, color: "#FFDA77" },
//   { name: "Larsen & Toubro", symbol: "LT", quantity: 8, currentPrice: 1875.50, change: 0.5, color: "#D9BF77" },
//   { name: "Bajaj Finance", symbol: "BAJFINANCE", quantity: 6, currentPrice: 6795.10, change: -0.8, color: "#BDB2FF" },
//   { name: "ITC Ltd", symbol: "ITC", quantity: 35, currentPrice: 485.75, change: 1.1, color: "#FFC6FF" },
//   { name: "Maruti Suzuki", symbol: "MARUTI", quantity: 4, currentPrice: 9705.00, change: 0.7, color: "#A0C4FF" },
//   { name: "Wipro", symbol: "WIPRO", quantity: 28, currentPrice: 403.60, change: -1.3, color: "#B5E48C" },
// ];
const holdings: Holding[] = [
  { name: "Reliance Industries", symbol: "RELIANCE", quantity: 15, currentPrice: 2480.75, change: 1.3, color: "#5C9BFF" },
  { name: "Tata Consultancy Services", symbol: "TCS", quantity: 10, currentPrice: 3251.20, change: -0.5, color: "#D3D2B8" },
  { name: "HDFC Bank", symbol: "HDFCBANK", quantity: 20, currentPrice: 1445.50, change: 0.8, color: "#D45A31" },
  { name: "Infosys Ltd", symbol: "INFY", quantity: 25, currentPrice: 1487.65, change: -1.2, color: "#D08F00" },
  { name: "ICICI Bank", symbol: "ICICIBANK", quantity: 30, currentPrice: 869.30, change: 2.0, color: "#76B7A3" },
  { name: "State Bank of India", symbol: "SBIN", quantity: 50, currentPrice: 574.90, change: -0.9, color: "#CC9A7C" },
  { name: "Bharti Airtel", symbol: "BHARTIARTL", quantity: 40, currentPrice: 701.25, change: 1.5, color: "#FF6A6A" },
  { name: "Asian Paints", symbol: "ASIANPAINT", quantity: 12, currentPrice: 2962.90, change: 0.6, color: "#E7B28F" },
  { name: "Hindustan Unilever", symbol: "HINDUNILVR", quantity: 18, currentPrice: 2537.10, change: -1.0, color: "#AD5C5C" },
  { name: "Axis Bank", symbol: "AXISBANK", quantity: 22, currentPrice: 1188.75, change: 2.3, color: "#F1C24B" },
  { name: "Larsen & Toubro", symbol: "LT", quantity: 8, currentPrice: 1875.50, change: 0.5, color: "#C39D3D" },
  { name: "Bajaj Finance", symbol: "BAJFINANCE", quantity: 6, currentPrice: 6795.10, change: -0.8, color: "#7E7AF9" },
  { name: "ITC Ltd", symbol: "ITC", quantity: 35, currentPrice: 485.75, change: 1.1, color: "#D294D7" },
  { name: "Maruti Suzuki", symbol: "MARUTI", quantity: 4, currentPrice: 9705.00, change: 0.7, color: "#7A92D3" },
  { name: "Wipro", symbol: "WIPRO", quantity: 28, currentPrice: 403.60, change: -1.3, color: "#92C97F" },
];



export default function EnhancedCurrentHoldings() {
  const totalValue = holdings.reduce((sum, holding) => sum + holding.quantity * holding.currentPrice, 0)

  const chartData = holdings.map(holding => ({
    name: holding.name,
    value: holding.quantity * holding.currentPrice,
    color: holding.color
  }))
  

  return (
    <div className="containe my-5 p-4  rounded">
      <h2 className="text-center mb-4">Current Holdings</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">Portfolio Overview</h5>
              <p className="card-text">Your investment summary</p>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <h6>Total Value</h6>
                <p className="display-4">₹{totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Asset</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Current Price</th>
                    <th scope="col">Total Value</th>
                    <th scope="col">24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((holding) => (
                    <tr key={holding.symbol}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle me-2" style={{ width: '12px', height: '12px', backgroundColor: holding.color }}></div>
                          <div>
                            <p className="mb-0">{holding.name}</p>
                            <small className="text-muted">{holding.symbol}</small>
                          </div>
                        </div>
                      </td>
                      <td>{holding.quantity}</td>
                      <td>₹{holding.currentPrice.toFixed(2)}</td>
                      <td>₹{(holding.quantity * holding.currentPrice).toFixed(2)}</td>
                      <td>
                        <span className={`badge ${holding.change >= 0 ? 'bg-success' : 'bg-danger'}`}>
                          {holding.change >= 0 ? '▲' : '▼'} {Math.abs(holding.change)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Portfolio Distribution</h5>
              <p className="card-text">Asset allocation</p>
            </div>
            <div className="card-body">
              <div style={{ width: '100%', height: '256px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
