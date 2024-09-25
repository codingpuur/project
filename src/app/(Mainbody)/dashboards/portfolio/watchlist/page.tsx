"use client"

import React, { useState } from 'react'
import { Table, Button, Form, InputGroup, Badge } from 'react-bootstrap'
import { ArrowUpRight, ArrowDownRight, Star, Plus, X } from "lucide-react"

interface WatchlistItem {
  id: string
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
}

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([
    { id: '1', symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.75, changePercent: 1.86 },
    { id: '2', symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2680.70, change: -15.30, changePercent: -0.57 },
    { id: '3', symbol: 'MSFT', name: 'Microsoft Corporation', price: 305.94, change: 1.24, changePercent: 0.41 },
    { id: '4', symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3304.00, change: -23.00, changePercent: -0.69 },
    { id: '5', symbol: 'TSLA', name: 'Tesla, Inc.', price: 733.80, change: 15.20, changePercent: 2.11 },
  ])

  const [newSymbol, setNewSymbol] = useState('')

  const handleAddToWatchlist = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSymbol) {
      const newItem: WatchlistItem = {
        id: Date.now().toString(),
        symbol: newSymbol.toUpperCase(),
        name: `${newSymbol.toUpperCase()} Corp.`,
        price: Math.random() * 1000,
        change: (Math.random() - 0.5) * 20,
        changePercent: (Math.random() - 0.5) * 5,
      }
      setWatchlist(prev => [...prev, newItem])
      setNewSymbol('')
    }
  }

  const handleRemoveFromWatchlist = (id: string) => {
    setWatchlist(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header d-flex align-items-center">
          <Star className="me-2 text-warning" size={24} />
          <h3 className="mb-0">Watchlist</h3>
        </div>
        <div className="card-body">
          <p>Track your favorite stocks</p>
          <Form onSubmit={handleAddToWatchlist} className="mb-4">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Add symbol (e.g., AAPL)"
                value={newSymbol}
                onChange={(e) => setNewSymbol(e.target.value)}
              />
              <Button type="submit" variant="primary">
                <Plus className="me-2" size={16} />
                Add
              </Button>
            </InputGroup>
          </Form>
          <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th className="text-end">Price</th>
                  <th className="text-end">Change</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map((item) => (
                  <tr key={item.id}>
                    <td>{item.symbol}</td>
                    <td>{item.name}</td>
                    <td className="text-end">${item.price.toFixed(2)}</td>
                    <td className="text-end">
                      <Badge bg={item.change >= 0 ? "success" : "danger"} className="p-2">
                        {item.change >= 0 ? (
                          <ArrowUpRight className="me-1" size={16} />
                        ) : (
                          <ArrowDownRight className="me-1" size={16} />
                        )}
                        ${Math.abs(item.change).toFixed(2)} ({Math.abs(item.changePercent).toFixed(2)}%)
                      </Badge>
                    </td>
                    <td>
                      <Button variant="danger" size="sm" onClick={() => handleRemoveFromWatchlist(item.id)}>
                        <X size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
