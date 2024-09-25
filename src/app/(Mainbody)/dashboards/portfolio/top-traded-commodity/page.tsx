"use client"

import React, { useState } from 'react'
import { Table, Badge, Button, Card } from 'react-bootstrap'
import { ArrowUpRight, ArrowDownRight, ArrowClockwise } from 'react-bootstrap-icons'

interface Commodity {
  id: string
  name: string
  symbol: string
  price: number
  change: number
  changePercent: number
  volume: number
}

const initialCommodities: Commodity[] = [
  { id: '1', name: 'Crude Oil', symbol: 'CL', price: 71.55, change: 1.20, changePercent: 1.68, volume: 1234567 },
  { id: '2', name: 'Gold', symbol: 'GC', price: 1948.50, change: -5.30, changePercent: -0.27, volume: 987654 },
  { id: '3', name: 'Natural Gas', symbol: 'NG', price: 2.585, change: 0.095, changePercent: 3.68, volume: 876543 },
  { id: '4', name: 'Silver', symbol: 'SI', price: 24.21, change: -0.18, changePercent: -0.74, volume: 765432 },
  { id: '5', name: 'Copper', symbol: 'HG', price: 3.7885, change: 0.0365, changePercent: 0.97, volume: 654321 },
  { id: '6', name: 'Wheat', symbol: 'ZW', price: 623.25, change: 9.75, changePercent: 1.59, volume: 543210 },
  { id: '7', name: 'Corn', symbol: 'ZC', price: 588.50, change: -2.75, changePercent: -0.47, volume: 432109 },
  { id: '8', name: 'Soybeans', symbol: 'ZS', price: 1345.75, change: 15.25, changePercent: 1.15, volume: 321098 },
]

export default function TopTradedCommodities() {
  const [commodities, setCommodities] = useState<Commodity[]>(initialCommodities)

  const refreshData = () => {
    const updatedCommodities = commodities.map(commodity => ({
      ...commodity,
      price: Number((commodity.price * (1 + (Math.random() - 0.5) * 0.02)).toFixed(4)),
      change: Number((Math.random() - 0.5) * 10).toFixed(2),
      changePercent: Number((Math.random() - 0.5) * 5).toFixed(2),
      volume: Math.floor(commodity.volume * (0.9 + Math.random() * 0.2))
    }))
    // setCommodities(updatedCommodities)
  }

  return (
    <div className="containe mt-5">
      <Card className="shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title className="mb-0">Top Traded Commodities</Card.Title>
            <Card.Text>Real-time prices and trading volumes</Card.Text>
          </div>
          <Button variant="outline-secondary" onClick={refreshData}>
            <ArrowClockwise size={18} />
          </Button>
        </Card.Header>
        <Card.Body>
          <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Commodity</th>
                  <th>Symbol</th>
                  <th className="text-end">Price</th>
                  <th className="text-end">Change</th>
                  <th className="text-end">Volume</th>
                </tr>
              </thead>
              <tbody>
                {commodities.map((commodity) => (
                  <tr key={commodity.id}>
                    <td>{commodity.name}</td>
                    <td>{commodity.symbol}</td>
                    <td className="text-end">${commodity.price.toFixed(2)}</td>
                    <td className="text-end">
                      <Badge
                        bg={commodity.change >= 0 ? "success" : "danger"}
                        className="d-flex align-items-center justify-content-end"
                      >
                        {commodity.change >= 0 ? (
                          <ArrowUpRight className="me-1" />
                        ) : (
                          <ArrowDownRight className="me-1" />
                        )}
                        ${Math.abs(commodity.change).toFixed(2)} ({Math.abs(commodity.changePercent).toFixed(2)}%)
                      </Badge>
                    </td>
                    <td className="text-end">{commodity.volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
