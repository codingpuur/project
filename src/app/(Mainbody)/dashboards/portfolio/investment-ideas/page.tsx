'use client'

import React, { useMemo, useState } from 'react'
import { Table, Button } from 'react-bootstrap'

type InvestmentIdea = {
  companyName: string
  callDate: string
  ltp: number
  target: number
  potentialReturn: number
  callType: "Buy" | "Sell"
}

const investmentData: InvestmentIdea[] = [
  {
    companyName: "Cello",
    callDate: "18-Nov",
    ltp: 806.8,
    target: 880,
    potentialReturn: 9.07,
    callType: "Buy"
  },
  {
    companyName: "Eichermot",
    callDate: "18-11-2024",
    ltp: 4883.7,
    target: 3500,
    potentialReturn: 28.33,
    callType: "Sell"
  },
  {
    companyName: "Sunteck",
    callDate: "18-11-2024",
    ltp: 493.1,
    target: 670,
    potentialReturn: 35.88,
    callType: "Buy"
  },
  {
    companyName: "Sula",
    callDate: "18-11-2024",
    ltp: 395.45,
    target: 450,
    potentialReturn: 13.79,
    callType: "Buy"
  },
  {
    companyName: "Bluedart",
    callDate: "18-11-2024",
    ltp: 7657.6,
    target: 8250,
    potentialReturn: 7.74,
    callType: "Buy"
  },
  {
    companyName: "Ramcocem",
    callDate: "18-11-2024",
    ltp: 902.35,
    target: 600,
    potentialReturn: 33.51,
    callType: "Sell"
  },
  {
    companyName: "Motherson",
    callDate: "18-11-2024",
    ltp: 165.36,
    target: 175,
    potentialReturn: 5.83,
    callType: "Buy"
  }
]

export default function InvestmentIdeas() {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof InvestmentIdea
    direction: 'asc' | 'desc'
  } | null>(null)

  const sortedData = useMemo(() => {
    if (!sortConfig) return investmentData

    return [...investmentData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [sortConfig])

  const requestSort = (key: keyof InvestmentIdea) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig?.key === key && prevConfig?.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  return (
    <div className="containe mt" style={{marginTop:"100px"}}>
      <h2 className="text-center mb-4">Investment Ideas</h2>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Button variant="link" onClick={() => requestSort('companyName')} className="text-decoration-none">
                Company Name <i className="bi bi-arrow-down-up"></i>
              </Button>
            </th>
            <th>
              <Button variant="link" onClick={() => requestSort('callDate')} className="text-decoration-none">
                Call Date <i className="bi bi-arrow-down-up"></i>
              </Button>
            </th>
            <th>
              <Button variant="link" onClick={() => requestSort('ltp')} className="text-decoration-none">
                LTP <i className="bi bi-arrow-down-up"></i>
              </Button>
            </th>
            <th>
              <Button variant="link" onClick={() => requestSort('target')} className="text-decoration-none">
                Target <i className="bi bi-arrow-down-up"></i>
              </Button>
            </th>
            <th>
              <Button variant="link" onClick={() => requestSort('potentialReturn')} className="text-decoration-none">
                Potential Return <i className="bi bi-arrow-down-up"></i>
              </Button>
            </th>
            <th>
              <Button variant="link" onClick={() => requestSort('callType')} className="text-decoration-none">
                Call Type <i className="bi bi-arrow-down-up"></i>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((idea) => (
            <tr key={idea.companyName}>
              <td>{idea.companyName}</td>
              <td>{idea.callDate}</td>
              <td className="text-end">{idea.ltp.toFixed(2)}</td>
              <td className="text-end">{idea.target}</td>
              <td className="text-end">{idea.potentialReturn.toFixed(2)}%</td>
              <td>
                <span
                  className={`badge ${
                    idea.callType === "Buy" ? "bg-success text-white" : "bg-danger text-white"
                  }`}
                >
                  {idea.callType}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
