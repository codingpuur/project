import React from 'react';
import { Card, CardBody, Table, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';

const positionDescriptions = {
  'LONG BUILD UP': 'Buying activity indicating that traders are building long positions with the expectation of rising prices.',
  'SHORT COVERING': 'Selling activity to close previously held short positions, often in response to a rise in prices.',
  'SIGNIFICANT SHORT BUILD UP': 'An increase in short positions suggesting a bearish outlook from traders.',
  'LONG LIQUIDATION': 'Selling of long positions by traders, typically due to a decline in prices or profit-taking.',
};

const DerivativeAnalysisTable = ({ commodities }) => {

  console.log(commodities)
  const data = [
    { commodity: 'ALUMINIUM', position: 'LONG BUILD UP', color: 'blue' },
    { commodity: 'COPPER', position: 'SHORT COVERING', color: 'green' },
    { commodity: 'CRUDEOIL', position: 'SIGNIFICANT SHORT BUILD UP', color: 'red' },
    { commodity: 'GOLD', position: 'LONG LIQUIDATION', color: 'orange' },
    { commodity: 'NATURALGAS', position: 'SIGNIFICANT SHORT BUILD UP', color: 'red' },
    { commodity: 'SILVER', position: 'SIGNIFICANT SHORT BUILD UP', color: 'red' },
    { commodity: 'ZINC', position: 'LONG BUILD UP', color: 'blue' },
  ];

  const filteredData = data.filter(item => commodities  === item.commodity);

  return (
    <Col sm={12} xl={6} className='box-col-6'>
      <Card>
        <CommonHeader title="Derivative Analysis of Futures Activity" headClass='pb-0' />
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>COMMODITIES</th>
                <th>YESTERDAY'S POSITIONING OF TRADERS</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.commodity}</td>
                  <td style={{ color: item.color, fontWeight: 'bold' }}>{item.position}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Detailed Descriptions */}
          <div style={{ marginTop: '20px' }}>
            <h5>Position Descriptions:</h5>
            <ul>
              {filteredData.map((item, index) => (
                <li key={index}>
                  <strong>{item.commodity}:</strong> {positionDescriptions[item.position]}
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default DerivativeAnalysisTable;
