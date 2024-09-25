"use client"

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const brokerageViews = [
  { 
    stock: "Reliance Industries", 
    currentPrice: 2450, 
    targetPrice: 2800, 
    recommendation: "Buy", 
    upside: 14.29, 
    brokerage: "Motilal Oswal" 
  },
  { 
    stock: "HDFC Bank", 
    currentPrice: 1620, 
    targetPrice: 1850, 
    recommendation: "Buy", 
    upside: 14.20, 
    brokerage: "ICICI Securities" 
  },
  { 
    stock: "Infosys", 
    currentPrice: 1380, 
    targetPrice: 1500, 
    recommendation: "Hold", 
    upside: 8.70, 
    brokerage: "Kotak Securities" 
  },
  { 
    stock: "ITC", 
    currentPrice: 380, 
    targetPrice: 450, 
    recommendation: "Buy", 
    upside: 18.42, 
    brokerage: "Axis Securities" 
  },
  { 
    stock: "Tata Motors", 
    currentPrice: 520, 
    targetPrice: 480, 
    recommendation: "Sell", 
    upside: -7.69, 
    brokerage: "Edelweiss" 
  }
]

export default function Component() {
  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation.toLowerCase()) {
      case 'buy': return 'bg-success'
      case 'sell': return 'bg-danger'
      default: return 'bg-warning'
    }
  }

  return (
    <div className="card mx-auto" >
      <div className="card-header">
        <h2 className="card-title">Brokerage House Views</h2>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Stock</th>
              <th className="text-end">Current Price</th>
              <th className="text-end">Target Price</th>
              <th>Recommendation</th>
              <th className="text-end">Potential Upside</th>
              <th>Brokerage</th>
            </tr>
          </thead>
          <tbody>
            {brokerageViews.map((view) => (
              <tr key={view.stock}>
                <td>{view.stock}</td>
                <td className="text-end">₹{view.currentPrice}</td>
                <td className="text-end">₹{view.targetPrice}</td>
                <td>
                  <span className={`badge ${getRecommendationColor(view.recommendation)}`}>
                    {view.recommendation}
                  </span>
                </td>
                <td className={`text-end ${view.upside >= 0 ? 'text-success' : 'text-danger'}`}>
                  {view.upside >= 0 ? '+' : ''}{view.upside.toFixed(2)}%
                </td>
                <td>{view.brokerage}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4" style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={brokerageViews} layout="vertical">
              <XAxis type="number" domain={[0, 'dataMax + 500']} />
              <YAxis dataKey="stock" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="currentPrice" name="Current Price" fill="#8884d8" />
              <Bar dataKey="targetPrice" name="Target Price">
                {brokerageViews.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.targetPrice > entry.currentPrice ? '#28a745' : '#dc3545'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
