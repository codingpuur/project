"use client"

import { useState, useEffect } from 'react';
import { Card, Table, Tabs, Tab } from 'react-bootstrap';
import { ArrowDownIcon, ArrowUpIcon, DollarSign, Bitcoin, Banknote } from "lucide-react";

type Instrument = {
  id: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  bid: number;
  ask: number;
}

type InstrumentCategory = 'forex' | 'crypto' | 'stocks';

const mockInstruments: Record<InstrumentCategory, Instrument[]> = {
  forex: [
    { id: 'eurusd', name: 'EUR/USD', price: 1.1845, change: 0.0012, changePercent: 0.10, bid: 1.1844, ask: 1.1846 },
    { id: 'gbpusd', name: 'GBP/USD', price: 1.3956, change: -0.0008, changePercent: -0.06, bid: 1.3955, ask: 1.3957 },
    { id: 'usdjpy', name: 'USD/JPY', price: 110.32, change: 0.15, changePercent: 0.14, bid: 110.31, ask: 110.33 },
  ],
  crypto: [
    { id: 'btcusd', name: 'BTC/USD', price: 39245.50, change: 1250.25, changePercent: 3.29, bid: 39240.00, ask: 39251.00 },
    { id: 'ethusd', name: 'ETH/USD', price: 2356.75, change: -45.25, changePercent: -1.88, bid: 2355.50, ask: 2358.00 },
    { id: 'xrpusd', name: 'XRP/USD', price: 0.7523, change: 0.0125, changePercent: 1.69, bid: 0.7521, ask: 0.7525 },
  ],
  stocks: [
    { id: 'aapl', name: 'AAPL', price: 145.86, change: 0.96, changePercent: 0.66, bid: 145.85, ask: 145.87 },
    { id: 'googl', name: 'GOOGL', price: 2725.81, change: -15.23, changePercent: -0.56, bid: 2725.50, ask: 2726.12 },
    { id: 'msft', name: 'MSFT', price: 289.67, change: 2.34, changePercent: 0.81, bid: 289.65, ask: 289.69 },
  ],
}

const InstrumentRow = ({ instrument }: { instrument: Instrument }) => {
  const isPositive = instrument.change >= 0;

  return (
    <tr key={instrument.id}>
      <td>{instrument.name}</td>
      <td>{instrument.price.toFixed(4)}</td>
      <td>
        <div className={`d-flex align-items-center ${isPositive ? 'text-success' : 'text-danger'}`}>
          {isPositive ? <ArrowUpIcon className="mr-1 h-4 w-4" /> : <ArrowDownIcon className="mr-1 h-4 w-4" />}
          {Math.abs(instrument.change).toFixed(4)}
        </div>
      </td>
      <td className={isPositive ? 'text-success' : 'text-danger'}>
        {(isPositive ? '+' : '') + instrument.changePercent.toFixed(2)}%
      </td>
      <td>{instrument.bid.toFixed(4)}</td>
      <td>{instrument.ask.toFixed(4)}</td>
    </tr>
  )
}

export default function LiveMarketData() {
  const [instruments, setInstruments] = useState(mockInstruments);
  const [key, setKey] = useState<InstrumentCategory>('forex');

  useEffect(() => {
    // Simulate live data updates
    const interval = setInterval(() => {
      setInstruments(prevInstruments => {
        const updatedInstruments = { ...prevInstruments };
        Object.keys(updatedInstruments).forEach(category => {
          updatedInstruments[category as InstrumentCategory] = updatedInstruments[category as InstrumentCategory].map(instrument => {
            const newPrice = instrument.price * (1 + (Math.random() - 0.5) * 0.002);
            const change = newPrice - instrument.price;
            return {
              ...instrument,
              price: newPrice,
              change,
              changePercent: (change / instrument.price) * 100,
              bid: instrument.bid * (1 + (Math.random() - 0.5) * 0.001),
              ask: instrument.ask * (1 + (Math.random() - 0.5) * 0.001),
            };
          });
        });
        return updatedInstruments;
      });
    }, 2000); // Update every 2 seconds
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <Card className="w-full max-w-4xl">
      <Card.Body>
        <Card.Title>Live Market Data</Card.Title>
        <Card.Text>Real-time prices for major financial instruments</Card.Text>
      </Card.Body>
      <Tabs activeKey={key} onSelect={(k) => setKey(k as InstrumentCategory)} className="mb-3">
        <Tab eventKey="forex" title={<><DollarSign className="mr-2 h-4 w-4" /> Forex</>}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change %</th>
                <th>Bid</th>
                <th>Ask</th>
              </tr>
            </thead>
            <tbody>
              {instruments.forex.map(instrument => (
                <InstrumentRow key={instrument.id} instrument={instrument} />
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="crypto" title={<><Bitcoin className="mr-2 h-4 w-4" /> Crypto</>}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change %</th>
                <th>Bid</th>
                <th>Ask</th>
              </tr>
            </thead>
            <tbody>
              {instruments.crypto.map(instrument => (
                <InstrumentRow key={instrument.id} instrument={instrument} />
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="stocks" title={<><Banknote className="mr-2 h-4 w-4" /> Stocks</>}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change %</th>
                <th>Bid</th>
                <th>Ask</th>
              </tr>
            </thead>
            <tbody>
              {instruments.stocks.map(instrument => (
                <InstrumentRow key={instrument.id} instrument={instrument} />
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Card>
  );
}
