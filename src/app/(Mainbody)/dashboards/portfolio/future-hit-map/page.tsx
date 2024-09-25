    "use client"

    import React, { useState } from 'react'
import { Table, Badge, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'

interface HitMapData {
  item: string
  predictions: number[]
}

const items = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB', 'NFLX', 'NVDA', 'PYPL', 'ADBE']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const generateRandomData = (): HitMapData[] => {
  return items.map(item => ({
    item,
    predictions: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
  }))
}

const getColorForValue = (value: number) => {
  const hue = ((1 - value / 100) * 120).toString(10)
  return `hsl(${hue}, 80%, 50%)`
}

export default function FutureHitMap() {
  const [data, setData] = useState<HitMapData[]>(generateRandomData())
  const [selectedYear, setSelectedYear] = useState('2023')

  const regenerateData = () => {
    setData(generateRandomData())
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <h3 className="card-title mb-0">Future Hit Map</h3>
            <p className="card-text">Predicted performance intensity over time</p>
          </div>
          <Form.Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} style={{ width: '180px' }}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </Form.Select>
        </div>
        <div className="card-body">
          <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <Table bordered>
              <thead>
                <tr>
                  <th className="sticky-top bg-white" style={{ left: 0 }}>Item</th>
                  {months.map(month => (
                    <th key={month} className="text-center">{month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.item}>
                    <td className="sticky-left bg-white" style={{ left: 0 }}>{row.item}</td>
                    {row.predictions.map((value, index) => (
                      <td key={index} className="p-0">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>
                              {`${row.item}: ${value}% in ${months[index]} ${selectedYear}`}
                            </Tooltip>
                          }
                        >
                          <div
                            className="w-100 h-100"
                            style={{ height: '48px', backgroundColor: getColorForValue(value) }}
                          />
                        </OverlayTrigger>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex align-items-center">
              <span>Low</span>
              <div className="mx-2 w-25" style={{ height: '16px', background: 'linear-gradient(to right, hsl(120, 80%, 50%), hsl(0, 80%, 50%))' }} />
              <span>High</span>
            </div>
            <Button variant="outline-primary" onClick={regenerateData}>
              Regenerate Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
