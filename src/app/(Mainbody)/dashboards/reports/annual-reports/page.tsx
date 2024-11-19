"use client";

import { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CompanyData {
  company: string;
  enterpriseValue: string; // Keeping it as string due to commas in numbers
  evEbitda: number | "NA";
  basicEps: number;
  dividendPerShare: number;
  netProfitMargin: number;
  currentRatio: number | "NA";
  earningsYield: number;
  casa: number | "NA";
}


const companyData: CompanyData[] = [
  {
    company: "Reliance Industries Limited",
    enterpriseValue: "21,56,644.88",
    evEbitda: 24.96,
    basicEps: 62.14,
    dividendPerShare: 10,
    netProfitMargin: 7.86,
    currentRatio: 1.09,
    earningsYield: 0.02,
    casa: "NA",
  },
  {
    company: "Tata Consultancy Services",
    enterpriseValue: "13,99,246.10",
    evEbitda: 22.17,
    basicEps: 119.44,
    dividendPerShare: 73,
    netProfitMargin: 21.52,
    currentRatio: 2.2,
    earningsYield: 0.03,
    casa: "NA",
  },
  {
    company: "HDFC Bank",
    enterpriseValue: "39,63,440.78",
    evEbitda: "NA",
    basicEps: 85.83,
    dividendPerShare: 19.5,
    netProfitMargin: 24.92,
    currentRatio: "NA",
    earningsYield: 0.06,
    casa: 38.18,
  },
  {
    company: "Bharati Airtel",
    enterpriseValue: "8,32,338.45",
    evEbitda: 16.04,
    basicEps: 8.74,
    dividendPerShare: 8,
    netProfitMargin: 5.29,
    currentRatio: 0.43,
    earningsYield: 0.01,
    casa: "NA",
  },
  {
    company: "ICICI Bank",
    enterpriseValue: "22,17,739.57",
    evEbitda: "NA",
    basicEps: 58.38,
    dividendPerShare: 10,
    netProfitMargin: 28.61,
    currentRatio: "NA",
    earningsYield: 0.05,
    casa: 42.17,
  },
  {
    company: "Infosys Limited",
    enterpriseValue: "6,13,811.00",
    evEbitda: 15.67,
    basicEps: 65.62,
    dividendPerShare: 46,
    netProfitMargin: 21.12,
    currentRatio: 2.62,
    earningsYield: 0.04,
    casa: "NA",
  },
  {
    company: "State Bank of India",
    enterpriseValue: "59,60,162.28",
    evEbitda: "NA",
    basicEps: 68.44,
    dividendPerShare: 13.7,
    netProfitMargin: 14.71,
    currentRatio: "NA",
    earningsYield: 0.09,
    casa: 39.89,
  },
  {
    company: "ITC Limited",
    enterpriseValue: "5,28,817.41",
    evEbitda: 18.87,
    basicEps: 16.39,
    dividendPerShare: 13.75,
    netProfitMargin: 31.2,
    currentRatio: 2.91,
    earningsYield: 0.04,
    casa: "NA",
  },
  {
    company: "Hindustan Unilever Limited",
    enterpriseValue: "5,25,822.75",
    evEbitda: 34.68,
    basicEps: 43.05,
    dividendPerShare: 42,
    netProfitMargin: 16.72,
    currentRatio: 1.64,
    earningsYield: 0.02,
    casa: "NA",
  },
];



export default function CompanyReports() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCompanies = companyData.filter((company) =>
    company.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h1>Annual Financial Reports</h1>
        <p>Explore detailed financial performance of leading companies.</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Form.Control
          type="text"
          placeholder="Search company..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ maxWidth: "300px", margin: "auto" }}
        />
      </div>

      <ResponsiveContainer width="100%" height={300} style={{ marginBottom: "20px" }}>
        <LineChart data={filteredCompanies}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="company" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="netProfitMargin" stroke="#82ca9d" name="Net Profit Margin" />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ marginBottom: "20px" }}>
        <h2>Company Data</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredCompanies.map((company) => (
            <Card
              key={company.company}
              style={{
                width: "300px",
                border: "1px solid #007bff",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <Card.Header
                style={{ backgroundColor: "#007bff", color: "white", fontWeight: "bold" }}
              >
                {company.company}
              </Card.Header>
              <Card.Body>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <strong>Enterprise Value:</strong> {company.enterpriseValue}
                  </li>
                  <li>
                    <strong>EV/EBITDA:</strong> {company.evEbitda}
                  </li>
                  <li>
                    <strong>Basic EPS:</strong> {company.basicEps}
                  </li>
                  <li>
                    <strong>Dividend/Share:</strong> {company.dividendPerShare}
                  </li>
                  <li>
                    <strong>Net Profit Margin:</strong> {company.netProfitMargin}%
                  </li>
                  <li>
                    <strong>Current Ratio:</strong> {company.currentRatio}
                  </li>
                  <li>
                    <strong>Earnings Yield:</strong> {company.earningsYield}
                  </li>
                  <li>
                    <strong>CASA:</strong> {company.casa}
                  </li>
                </ul>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <Table striped bordered hover responsive style={{ marginTop: "20px" }}>
        <thead style={{ backgroundColor: "#007bff", color: "white" }}>
          <tr>
            <th>Company</th>
            <th>Enterprise Value</th>
            <th>EV/EBITDA</th>
            <th>Basic EPS</th>
            <th>Dividend/Share</th>
            <th>Net Profit Margin</th>
            <th>Current Ratio</th>
            <th>Earnings Yield</th>
            <th>CASA</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company) => (
            <tr key={company.company}>
              <td>{company.company}</td>
              <td>{company.enterpriseValue}</td>
              <td>{company.evEbitda}</td>
              <td>{company.basicEps}</td>
              <td>{company.dividendPerShare}</td>
              <td>{company.netProfitMargin}%</td>
              <td>{company.currentRatio}</td>
              <td>{company.earningsYield}</td>
              <td>{company.casa}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}