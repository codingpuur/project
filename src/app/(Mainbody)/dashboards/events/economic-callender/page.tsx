"use client"

import { useState } from 'react';
import { Flag } from 'lucide-react';

type EconomicEvent = {
  id: string;
  date: string;
  time: string;
  event: string;
  country: string;
  impact: 'Low' | 'Medium' | 'High';
};

const mockEvents: EconomicEvent[] = [
  { id: '1', date: '2023-07-31', time: '08:30 AM', event: 'GDP Growth Rate', country: 'USA', impact: 'High' },
  { id: '2', date: '2023-07-31', time: '10:00 AM', event: 'Unemployment Rate', country: 'Canada', impact: 'Medium' },
  { id: '3', date: '2023-08-01', time: '09:45 AM', event: 'Manufacturing PMI', country: 'UK', impact: 'Medium' },
  { id: '4', date: '2023-08-01', time: '12:00 PM', event: 'Interest Rate Decision', country: 'EU', impact: 'High' },
  { id: '5', date: '2023-08-02', time: '02:30 PM', event: 'Crude Oil Inventories', country: 'USA', impact: 'Low' },
  { id: '6', date: '2023-08-03', time: '07:00 AM', event: 'Retail Sales', country: 'Germany', impact: 'Medium' },
  { id: '7', date: '2023-08-04', time: '08:30 AM', event: 'Non-Farm Payrolls', country: 'USA', impact: 'High' },
];

const ImpactIndicator = ({ impact }: { impact: EconomicEvent['impact'] }) => {
  const baseClasses = "rounded-circle";
  const impactClasses = {
    Low: "bg-success",
    Medium: "bg-warning",
    High: "bg-danger",
  };
  return <div className={`${baseClasses} ${impactClasses[impact]}`} style={{ width: '12px', height: '12px' }} />;
};

export default function EconomicCalendar() {
  const [timeFrame, setTimeFrame] = useState('7d');

  // In a real application, you would filter events based on the selected time frame
  const filteredEvents = mockEvents;

  return (
    <div className="card w-100 max-w-4xl">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">Economic Calendar</h5>
          <p className="card-text">Upcoming economic events and their potential market impact</p>
        </div>
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="form-select w-auto"
        >
          <option value="7d">Select time frame</option>
          <option value="1d">Today</option>
          <option value="7d">This Week</option>
          <option value="1m">This Month</option>
        </select>
      </div>
      <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Event</th>
              <th>Country</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>
                  <div>{event.date}</div>
                  <div className="text-muted">{event.time}</div>
                </td>
                <td>{event.event}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Flag className="me-2" style={{ height: '16px', width: '16px' }} />
                    {event.country}
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <ImpactIndicator impact={event.impact} />
                    <span className="ms-2">{event.impact}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
