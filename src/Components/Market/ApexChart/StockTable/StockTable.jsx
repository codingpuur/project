// components/StockTable.js

import CommonHeader from '@/Common/CommonHeader';
import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const StockTable = () => {
  const rows = [
    { symbol: 'TATASTEEL', prevClose: 148.17, iep: 152.00, chg: 3.83, percChg: 2.58, final: 152.00, finalQty: '3,98,004', value: '6.05', ffmCap: '1,22,252.18', nm52wH: 184.60, nm52wL: 114.60 },
    { symbol: 'HINDALCO', prevClose: 647.70, iep: 658.00, chg: 10.30, percChg: 1.59, final: 658.00, finalQty: '13,966', value: '0.92', ffmCap: '94,879.17', nm52wH: 715.25, nm52wL: 448.75 },
    { symbol: 'DRREDDY', prevClose: 6612.50, iep: 6700.00, chg: 87.50, percChg: 1.32, final: 6700.00, finalQty: '1,508', value: '1.01', ffmCap: '80,763.35', nm52wH: 7107.45, nm52wL: 5205.55 },
    // Add more rows as per your requirement
  ];

  return (
    <Col sm={12} xl={12} className='box-col-6'>
    <Card>
      <CommonHeader title="pre open market" headClass='pb-0'/>
      <CardBody>

    <div className="containe">
    
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>SYMBOL</th>
            <th>PREV. CLOSE</th>
            <th>IEP</th>
            <th>CHNG</th>
            <th>%CHNG</th>
            <th>FINAL</th>
            <th>FINAL QUANTITY</th>
            <th>VALUE (₹ Crores)</th>
            <th>FFM CAP (₹ Crores)</th>
            <th>NM 52W H</th>
            <th>NM 52W L</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.symbol}</td>
              <td>{row.prevClose}</td>
              <td>{row.iep}</td>
              <td>{row.chg}</td>
              <td>{row.percChg}</td>
              <td>{row.final}</td>
              <td>{row.finalQty}</td>
              <td>{row.value}</td>
              <td>{row.ffmCap}</td>
              <td>{row.nm52wH}</td>
              <td>{row.nm52wL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </CardBody>
      </Card>
      </Col>
  );
};

export default StockTable;
