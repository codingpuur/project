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

const holdings: Holding[] = [
  { name: "Apple Inc.", symbol: "AAPL", quantity: 10, currentPrice: 150.25, change: 2.5, color: "#A2D2FF" },
  { name: "Microsoft Corporation", symbol: "MSFT", quantity: 5, currentPrice: 305.75, change: -1.2, color: "#FEF9EF" },
  { name: "Amazon.com, Inc.", symbol: "AMZN", quantity: 3, currentPrice: 3302.50, change: 0.8, color: "#FF865E" },
  { name: "Tesla, Inc.", symbol: "TSLA", quantity: 2, currentPrice: 725.60, change: -3.5, color: "#FEE440" },
]

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
                <p className="display-4">${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
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
                      <td>${holding.currentPrice.toFixed(2)}</td>
                      <td>${(holding.quantity * holding.currentPrice).toFixed(2)}</td>
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
