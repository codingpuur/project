"use client"

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, Users, Award, IndianRupee } from "lucide-react"
import { ProgressBar } from 'react-bootstrap'

const data = [
  { name: 'Aug', value: 6500 },
  { name: 'Sep', value: 7000 },
  { name: 'Oct', value: 5500 },
  { name: 'Nov', value: 6200 },
  { name: 'Dec', value: 5900 },
  { name: 'Jan', value: 4000 },
  // { name: 'Feb', value: 3000 },
  // { name: 'Mar', value: 5000 },
  // { name: 'Apr', value: 4500 },
  // { name: 'May', value: 6000 },
  // { name: 'Jun', value: 5500 },
];


export default function UserStatistics() {
  return (
    <div className="contain p-5 rounded-3 ">
      <h2 className="text-center mb-5">User Statistics</h2>
      <div className="row mb-4">
        <div className="col-md-3">
          <StatCard
            title="Total Balance"
            value="₹12,345"
            change={5.67}
            icon={<IndianRupee className="h-4 w-4" />}
          />
        </div>
        <div className="col-md-3">
          <StatCard
            title="Investments"
            value="₹7,890"
            change={-2.34}
            icon={<TrendingUp className="h-4 w-4" />}
          />
        </div>
      
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Investment Growth</h5>
              <p className="card-text">Monthly investment value</p>
              <div className="h-200">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#0d6efd" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Portfolio Diversity</h5>
              <p className="card-text">Asset allocation</p>
              <div className="space-y-3">
                <ProgressItem label="Stocks" value={60} />
                <ProgressItem label="Comodities" value={25} />
                <ProgressItem label="F&O Derivatives" value={10} />
                {/* <ProgressItem label="Crypto" value={5} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  const isPositive = change >= 0
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="card-title">{title}</h6>
          <h3 className="card-value">{value}</h3>
          <p className={`text-${isPositive ? 'success' : 'danger'} d-flex align-items-center`}>
            {isPositive ? (
              <ArrowUpRight className="me-2 h-4 w-4" />
            ) : (
              <ArrowDownRight className="me-2 h-4 w-4" />
            )}
            {Math.abs(change)}%
          </p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  )
}

interface ProgressItemProps {
  label: string
  value: number
}

function ProgressItem({ label, value }: ProgressItemProps) {
  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <ProgressBar now={value} className="mb-2" />
    </div>
  )
}
