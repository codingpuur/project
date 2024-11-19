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
      title: 'Monetary Policy Statement',
      date: '2023-07-15',
      summary: '',
      pdfUrl: 'https://www.rbi.org.in/scripts/annualpolicy.aspx'
    },
    {
      id: 'rbi2',
      title: 'Circulars',
      date: '2023-07-10',
      summary: '',
      pdfUrl: 'https://rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx'
    },
    {
      id: 'rbi3',
      title: 'Press Releases',
      date: '2023-07-05',
      summary: '',
      pdfUrl: 'https://www.rbi.org.in/commonman/English/scripts/pressreleases.aspx'
    },
  ],
  SEBI: [
    {
      id: 'sebi1',
      title: 'SEBI Investor Guidelines',
      date: '2023-07-18',
      summary: '',
      pdfUrl: 'https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=5&smid=0'
    },
    {
      id: 'sebi2',
      title: 'Circulars',
      date: '2023-07-12',
      summary: '',
      pdfUrl: 'https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0'
    },
    {
      id: 'sebi3',
      title: 'Press Releases',
      date: '2023-07-08',
      summary: '',
      pdfUrl: 'https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=6&ssid=23&smid=0'
    },
  ],
  Federal: [
    {
      id: 'fed1',
      title: 'Federal Monetary policy',
      date: '2023-07-14',
      summary: '',
      pdfUrl: 'https://www.federalreserve.gov/monetarypolicy.htm'
    },
    {
      id: 'fed2',
      title: 'FOMC Calendars, statements, and minutes',
      date: '2023-07-20',
      summary: '',
      pdfUrl: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm'
    },
    {
      id: 'fed3',
      title: 'Press Releases',
      date: '2023-07-07',
      summary: '',
      pdfUrl: 'https://www.federalreserve.gov/newsevents/pressreleases.htm'
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
