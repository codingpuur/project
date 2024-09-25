"use client"

import React, { useState } from 'react'
import { Search, Clock, ArrowUpRight, Trash2 } from "lucide-react"

interface StockSearch {
  id: string
  symbol: string
  name: string
  lastSearched: Date
}

export default function StockSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<StockSearch[]>([
    { id: '1', symbol: 'AAPL', name: 'Apple Inc.', lastSearched: new Date('2023-06-10T14:30:00') },
    { id: '2', symbol: 'GOOGL', name: 'Alphabet Inc.', lastSearched: new Date('2023-06-09T10:15:00') },
    { id: '3', symbol: 'MSFT', name: 'Microsoft Corporation', lastSearched: new Date('2023-06-08T16:45:00') },
    { id: '4', symbol: 'AMZN', name: 'Amazon.com Inc.', lastSearched: new Date('2023-06-07T09:20:00') },
    { id: '5', symbol: 'TSLA', name: 'Tesla, Inc.', lastSearched: new Date('2023-06-06T11:30:00') },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would typically make an API call here
    console.log('Searching for:', searchTerm)
    // For demonstration, we'll add the search term to the history
    if (searchTerm) {
      const newSearch: StockSearch = {
        id: Date.now().toString(),
        symbol: searchTerm.toUpperCase(),
        name: `${searchTerm.toUpperCase()} Corporation`,
        lastSearched: new Date(),
      }
      setSearchHistory(prev => [newSearch, ...prev.slice(0, 4)])
      setSearchTerm('')
    }
  }

  const handleDelete = (id: string) => {
    setSearchHistory(prev => prev.filter(item => item.id !== id))
  }

  const filteredHistory = searchHistory.filter(item =>
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="card w-100 mx-auto">
      <div className="card-header">
        <h5 className="card-title">Stock Search History</h5>
        <p className="card-text">View and manage your recent stock searches</p>
      </div>
      <div className="card-body">
        <form onSubmit={handleSearch} className="d-flex mb-4">
          <input
            type="text"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary">
            <Search className="h-4 w-4" />
          </button>
        </form>
        <div className="border p-2 overflow-auto" style={{ height: '300px' }}>
          {filteredHistory.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <div className="d-flex align-items-center">
                <div className="p-2 bg-primary text-white rounded-circle me-3">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="mb-0 fw-semibold">{item.symbol}</p>
                  <p className="mb-0 text-muted">{item.name}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary btn-sm me-2">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
