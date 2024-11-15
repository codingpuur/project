"use client"

import React from 'react'
import { Table, Card } from 'react-bootstrap'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const commodities = [
  { name: "Crude Oil", price: 5700, change: 2.15, volume: 1250000 },
  { name: "Gold", price: 70000, change: -5.30, volume: 980000 },
  { name: "Natural Gas", price: 240, change: 0.08, volume: 850000 },
  { name: "Silver", price: 90000, change: -0.18, volume: 720000 },
  { name: "Copper", price: 810, change: 0.05, volume: 650000 },
]

export default function Component() {
  return (
    <div className="containe mt-5">
      <Card className="shadow-sm">
        <Card.Header>
          <Card.Title className="mb-0">Most Active Commodities</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="table-responsive">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Commodity</th>
                  <th className="text-end">Value</th>
                  <th className="text-end">Change</th>
                  <th className="text-end">Volume</th>
                </tr>
              </thead>
              <tbody>
                {commodities.map((commodity) => (
                  <tr key={commodity.name}>
                    <td className="font-weight-bold">{commodity.name}</td>
                    <td className="text-end">{commodity.price.toFixed(2)}</td>
                    <td className={`text-end ${commodity.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      {commodity.change >= 0 ? '+' : ''}{commodity.change.toFixed(2)}
                    </td>
                    <td className="text-end">{commodity.volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="mt-4" style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commodities}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="change">
        {commodities.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.change >= 0 ? 'red' : 'green'} // Conditional color based on change value
          />
        ))}
      </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
