"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertTriangle, DollarSign, Target } from "lucide-react"
import 'bootstrap/dist/css/bootstrap.min.css';

const riskManagementStrategies = [
  {
    title: "Stop-Loss Orders",
    description: "Place automatic orders to sell a security when it reaches a specific price, limiting potential losses."
  },
  {
    title: "Position Sizing",
    description: "Determine the appropriate amount of capital to allocate to each trade based on your risk tolerance."
  },
  {
    title: "Diversification",
    description: "Spread investments across various asset classes to reduce overall portfolio risk."
  },
  {
    title: "Hedging",
    description: "Use financial instruments to offset potential losses in investments."
  }
]

const capitalManagementTips = [
  "Never risk more than 1-2% of your account on a single trade",
  "Use proper position sizing to protect your capital",
  "Keep a portion of your capital in cash for opportunities",
  "Regularly review and rebalance your portfolio",
  "Use compounding to grow your capital over time"
]

const optionStrikeData = [
  { strike: 90, callDelta: 0.8, putDelta: -0.2 },
  { strike: 95, callDelta: 0.65, putDelta: -0.35 },
  { strike: 100, callDelta: 0.5, putDelta: -0.5 },
  { strike: 105, callDelta: 0.35, putDelta: -0.65 },
  { strike: 110, callDelta: 0.2, putDelta: -0.8 },
]

export default function AdvancedTrading() {
  const [accountSize, setAccountSize] = useState(10000)
  const [riskPercentage, setRiskPercentage] = useState(1)

  const calculatePositionSize = () => {
    return (accountSize * (riskPercentage / 100)).toFixed(2)
  }

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <h1>Advanced Trading Strategies</h1>
          <p>Learn about risk management, capital management, and options strike selection</p>
        </div>
        <div className="card-body">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" id="risk-tab" data-bs-toggle="tab" data-bs-target="#risk" role="tab">Risk Management</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="capital-tab" data-bs-toggle="tab" data-bs-target="#capital" role="tab">Capital Management</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="options-tab" data-bs-toggle="tab" data-bs-target="#options" role="tab">Options Strikes</button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="risk" role="tabpanel">
              <h2>How to Manage Risks</h2>
              <div className="accordion" id="riskAccordion">
                {riskManagementStrategies.map((strategy, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading-${index}`}>
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`}>
                        {strategy.title}
                      </button>
                    </h2>
                    <div id={`collapse-${index}`} className="accordion-collapse collapse" data-bs-parent="#riskAccordion">
                      <div className="accordion-body">
                        {strategy.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="alert alert-warning d-flex align-items-center">
                <AlertTriangle className="me-2" />
                <p className="mb-0">Remember, proper risk management is crucial for long-term trading success.</p>
              </div>
            </div>
            
            <div className="tab-pane fade" id="capital" role="tabpanel">
              <h2>How to Manage Capital</h2>
              <ul>
                {capitalManagementTips.map((tip, index) => (
                  <li key={index} className="d-flex align-items-start">
                    <DollarSign className="me-2" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="card mt-3">
                <div className="card-header">Position Size Calculator</div>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="accountSize" className="form-label">Account Size ($)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="accountSize"
                      value={accountSize}
                      onChange={(e) => setAccountSize(Number(e.target.value))}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="riskPercentage" className="form-label">Risk Percentage (%)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="riskPercentage"
                      value={riskPercentage}
                      onChange={(e) => setRiskPercentage(Number(e.target.value))}
                    />
                  </div>
                  <p className="fw-bold">Maximum Position Size: ${calculatePositionSize()}</p>
                </div>
              </div> */}
            </div>

            <div className="tab-pane fade" id="options" role="tabpanel">
              <h2>Deciding Options Strike</h2>
              <p>When selecting an options strike price, consider factors such as:</p>
              <ul>
                <li>Current price of the underlying asset</li>
                <li>Time until expiration</li>
                <li>Implied volatility</li>
                <li>Your market outlook (bullish, bearish, or neutral)</li>
              </ul>
              <div className="card mt-3">
                <div className="card-header">Option Delta vs Strike Price</div>
                <div className="card-body">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={optionStrikeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="strike" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="callDelta" fill="#8884d8" name="Call Delta" />
                        <Bar dataKey="putDelta" fill="#82ca9d" name="Put Delta" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="alert alert-info d-flex align-items-center">
                <Target className="me-2" />
                <p className="mb-0">The strike price closest to the current market price of the underlying asset is called the "at-the-money" strike.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
