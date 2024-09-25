"use client"

import { useState, ChangeEvent } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface AnnualReport {
  year: number;
  revenue: number;
  profit: number;
  eps: number;
  dividendYield: number;
  peRatio: number;
  marketCap: number;
}

const annualReports: AnnualReport[] = [
  { year: 2023, revenue: 500000000, profit: 100000000, eps: 2.5, dividendYield: 3.2, peRatio: 20, marketCap: 10000000000 },
  { year: 2022, revenue: 450000000, profit: 90000000, eps: 2.2, dividendYield: 3.0, peRatio: 18, marketCap: 9000000000 },
  { year: 2021, revenue: 400000000, profit: 80000000, eps: 2.0, dividendYield: 2.8, peRatio: 16, marketCap: 8000000000 },
  { year: 2020, revenue: 350000000, profit: 70000000, eps: 1.8, dividendYield: 2.5, peRatio: 15, marketCap: 7000000000 },
  { year: 2019, revenue: 300000000, profit: 60000000, eps: 1.6, dividendYield: 2.2, peRatio: 14, marketCap: 6000000000 }
];

export default function AdvancedAnnualReports() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredReports, setFilteredReports] = useState<AnnualReport[]>(annualReports);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1
    }).format(value);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = annualReports.filter(
      (report) =>
        report.year.toString().includes(term) ||
        report.revenue.toString().includes(term) ||
        report.profit.toString().includes(term)
    );
    setFilteredReports(filtered);
  };

  const latestReport = annualReports[0];

  return (
    <div className="container-fluid bg-light">
      <div className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4">Annual Financial Reports</h1>
          <p className="lead">Comprehensive insights into our financial performance</p>
          <div className="row text-center">
            <StatCard title="Revenue" value={formatCurrency(latestReport.revenue)} />
            <StatCard title="Profit" value={formatCurrency(latestReport.profit)} />
            <StatCard title="EPS" value={`$${latestReport.eps.toFixed(2)}`} />
            <StatCard title="Dividend Yield" value={`${latestReport.dividendYield.toFixed(1)}%`} />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4">Financial Performance Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={annualReports.slice().reverse()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
            <Line yAxisId="right" type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
          </LineChart>
        </ResponsiveContainer>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <h2>Annual Reports</h2>
          <Form.Control
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-25"
          />
        </div>

        <div className="my-4">
          <h3>Card View</h3>
          <div className="row">
            {filteredReports.map((report) => (
              <div className="col-md-4 mb-4" key={report.year}>
                <Card>
                  <Card.Header className="bg-primary text-white">{report.year} Annual Report</Card.Header>
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li><strong>Revenue: </strong>{formatCurrency(report.revenue)}</li>
                      <li><strong>Profit: </strong>{formatCurrency(report.profit)}</li>
                      <li><strong>EPS: </strong>{report.eps.toFixed(2)}</li>
                      <li><strong>Dividend Yield: </strong>{report.dividendYield.toFixed(1)}%</li>
                      <li><strong>P/E Ratio: </strong>{report.peRatio.toFixed(1)}</li>
                      <li><strong>Market Cap: </strong>{formatCurrency(report.marketCap)}</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Button variant="outline-primary">View</Button>
                    <Button variant="outline-secondary">Download</Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="my-4">
          <h3>Table View</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Year</th>
                <th>Revenue</th>
                <th>Profit</th>
                <th>EPS</th>
                <th>Dividend Yield</th>
                <th>P/E Ratio</th>
                <th>Market Cap</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report.year}>
                  <td>{report.year}</td>
                  <td>{formatCurrency(report.revenue)}</td>
                  <td>{formatCurrency(report.profit)}</td>
                  <td>${report.eps.toFixed(2)}</td>
                  <td>{report.dividendYield.toFixed(1)}%</td>
                  <td>{report.peRatio.toFixed(1)}</td>
                  <td>{formatCurrency(report.marketCap)}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="mr-2">View</Button>
                    <Button variant="outline-secondary" size="sm">Download</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="col-md-3">
      <div className="bg-primary text-white p-3 rounded">
        <h3>{title}</h3>
        <p className="h4">{value}</p>
      </div>
    </div>
  );
}
