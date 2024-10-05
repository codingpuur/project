"use client"

import { useState } from 'react';
import { Accordion, Button, Card, Form, InputGroup, Nav } from 'react-bootstrap';
import { Search, FileText } from "lucide-react";

type Regulation = {
  id: string;
  title: string;
  date: string;
  summary: string;
  pdfUrl: string;
}

type RegulatorType = 'RBI' | 'SEBI' | 'Federal';

const mockRegulations: Record<RegulatorType, Regulation[]> = {
  RBI: [
    {
      id: 'rbi1',
      title: 'Guidelines on Digital Lending',
      date: '2023-07-15',
      summary: 'New guidelines for digital lending platforms to ensure fair practices and consumer protection.',
      pdfUrl: '#'
    },
    {
      id: 'rbi2',
      title: 'Revised Regulatory Framework for NBFCs',
      date: '2023-07-10',
      summary: 'Updated regulatory framework for Non-Banking Financial Companies to strengthen the financial sector.',
      pdfUrl: '#'
    },
    {
      id: 'rbi3',
      title: 'Tokenisation of Card Transactions',
      date: '2023-07-05',
      summary: 'Extension of timeline for tokenisation of card transactions to enhance digital payment security.',
      pdfUrl: '#'
    },
  ],
  SEBI: [
    {
      id: 'sebi1',
      title: 'Framework for Social Stock Exchange',
      date: '2023-07-18',
      summary: 'Introduction of a framework for the Social Stock Exchange to facilitate funding for social enterprises.',
      pdfUrl: '#'
    },
    {
      id: 'sebi2',
      title: 'Revised Norms for Mutual Fund Investments',
      date: '2023-07-12',
      summary: 'Updated norms for mutual fund investments to ensure better risk management and investor protection.',
      pdfUrl: '#'
    },
    {
      id: 'sebi3',
      title: 'Guidelines on ESG Disclosures',
      date: '2023-07-08',
      summary: 'New guidelines for listed entities on Environmental, Social, and Governance (ESG) disclosures.',
      pdfUrl: '#'
    },
  ],
  Federal: [
    {
      id: 'fed1',
      title: 'Amendments to Regulation D',
      date: '2023-07-20',
      summary: 'Changes to Regulation D affecting reserve requirements for depository institutions.',
      pdfUrl: '#'
    },
    {
      id: 'fed2',
      title: 'Updates to the Community Reinvestment Act',
      date: '2023-07-14',
      summary: 'Modernization of the Community Reinvestment Act to reflect changes in the banking industry.',
      pdfUrl: '#'
    },
    {
      id: 'fed3',
      title: 'Revisions to Capital Planning Requirements',
      date: '2023-07-07',
      summary: 'Updated capital planning and stress testing requirements for large bank holding companies.',
      pdfUrl: '#'
    },
  ],
}

export default function LatestRegulations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeKey, setActiveKey] = useState('RBI');

  const filterRegulations = (regulations: Regulation[]) => {
    return regulations.filter(reg =>
      reg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <Card className="w-full max-w-4xl">
      <Card.Header>
        <h5>Latest Regulations and Circulars</h5>
        <p>Stay updated with the latest financial regulations from RBI, SEBI, and Federal reports</p>
      </Card.Header>
      <Card.Body>
        <InputGroup className="mb-4">
          <InputGroup.Text>
            <Search className="h-4 w-4 text-muted" />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search regulations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        <Nav variant="tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k as string)}>
          <Nav.Item>
            <Nav.Link eventKey="RBI">RBI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="SEBI">SEBI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Federal">Federal</Nav.Link>
          </Nav.Item>
        </Nav>
        <Accordion defaultActiveKey="0" className="mt-3">
          {filterRegulations(mockRegulations[activeKey as RegulatorType]).map((regulation, index) => (
            <Accordion.Item key={regulation.id} eventKey={index.toString()}>
              <Accordion.Header>
                <div className="d-flex justify-content-between w-100">
                  <span>{regulation.title}</span>
                  <span className="text-muted">{regulation.date}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p className="mb-2">{regulation.summary}</p>
                <Button variant="outline" size="sm" href={regulation.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2" />
                  View Full Document
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}
