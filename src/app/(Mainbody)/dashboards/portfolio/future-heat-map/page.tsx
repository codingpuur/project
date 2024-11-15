"use client"

import React, { useState } from 'react'
import { Table, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'

// Define the data structure for the heatmap
interface HitMapData {
  item: string
  predictions: number[]
}

// Array of Indian stock symbols
const items = ['RELIANCE', 'TCS', 'INFY', 'HDFCBANK', 'ICICIBANK', 'HDFC', 'BAJFINANCE', 'KOTAKBANK', 'LT', 'SBIN']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Function to generate random data for the heatmap
const generateRandomData = (): HitMapData[] => {
  return items.map(item => ({
    item,
    predictions: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
  }))
}

// Function to get a color based on value thresholds similar to the provided heat map
const getColorForValue = (value: number) => {
  if (value >= 20 && value < 40) return 'green';
  if (value >= 40 && value < 60) return 'yellow';
  if (value >= 60 && value < 80) return 'orange';
  if (value >= 80) return 'red';
  return 'lightgreen'; // for values below 20
}

// Main component for the future heatmap
export default function FutureHitMap() {
  const [data, setData] = useState<HitMapData[]>(generateRandomData())
  const [selectedYear, setSelectedYear] = useState('2023')

  // Function to regenerate random data
  const regenerateData = () => {
    setData(generateRandomData())
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0 }}>Future Heat Map</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#6c757d' }}>Predicted performance intensity over time (Indian Stocks)</p>
          </div>
          <Form.Select 
            value={selectedYear} 
            onChange={(e) =>{ 
              setSelectedYear(e.target.value)
              regenerateData()

            }} 
            style={{ width: '180px' }}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </Form.Select>
        </div>
        <div style={{ padding: '16px' }}>
          {/* Table displaying the heatmap */}
          <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <Table bordered>
              <thead>
                <tr>
                  <th style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>Item</th>
                  {months.map(month => (
                    <th key={month} style={{ textAlign: 'center', position: 'sticky', top: 0, backgroundColor: 'white' }}>{month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.item}>
                    <td style={{ position: 'sticky', left: 0, backgroundColor: 'white', zIndex: 1 }}>{row.item}</td>
                    {row.predictions.map((value, index) => (
                      <td key={index} style={{ padding: 0 }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>
                              {`${row.item}: ${value}% in ${months[index]} ${selectedYear}`}
                            </Tooltip>
                          }
                        >
                          <div
                            style={{
                              width: '100%',
                              height: '48px',
                              backgroundColor: getColorForValue(value),
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                            }}
                          >{value}</div>
                        </OverlayTrigger>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* Color scale legend and regenerate button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>Low</span>
              <div 
                style={{ 
                  margin: '0 8px', 
                  width: '100px', 
                  height: '16px', 
                  background: 'linear-gradient(to right, lightgreen, green, yellow, orange, red)' 
                }} 
              />
              <span>High</span>
            </div>
            {/* <Button variant="outline-primary" onClick={regenerateData} style={{ borderColor: '#0d6efd', color: '#0d6efd' }}>
              Regenerate Data
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
