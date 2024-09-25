import React from 'react';
import styles from './SectorPerformanceTable.module.css'; // Import CSS for styling
import { Card, CardBody, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';

const SectorPerformanceTable = () => {
  const data = [
    { category: 'IT', '2022': -24.1, '2021': 63.96, '2020': 57.73, '2019': 8.81, '2018': 17.65, '2017': 18.78 },
    { category: 'Pharma', '2022': -8.76, '2021': 20.24, '2020': 66.47, '2019': 3.8, '2018': -4.08, '2017': 5.13 },
    { category: 'Infra', '2022': 5.74, '2021': 51.37, '2020': 9.25, '2019': 1.8, '2018': -18.41, '2017': 47.95 },
    { category: 'Banking', '2022': 16.62, '2021': 15.48, '2020': -4.62, '2019': 14.79, '2018': -1.48, '2017': 38.87 },
    { category: 'Sensex', '2022': 3.44, '2021': 21.99, '2020': 15.75, '2019': 14.38, '2018': 5.87, '2017': 27.91 },
  ];

  return (
    <>
            <Col sm={12} xl={6} className='box-col-6'>
    <Card>
      <CommonHeader title="sector perfom" headClass='pb-0'/>
      <CardBody>

    <div className={styles.tableContainer}>
      <table className={styles.performanceTable}>
        <thead>
          <tr>
            <th>Category</th>
            <th>2022</th>
            <th>2021</th>
            <th>2020</th>
            <th>2019</th>
            <th>2018</th>
            <th>2017</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td className={row['2022'] === Math.max(...data.map(r => r['2022'])) ? styles.best : (row['2022'] === Math.min(...data.map(r => r['2022'])) ? styles.worst : '')}>{row['2022']}</td>
              <td className={row['2021'] === Math.max(...data.map(r => r['2021'])) ? styles.best : (row['2021'] === Math.min(...data.map(r => r['2021'])) ? styles.worst : '')}>{row['2021']}</td>
              <td className={row['2020'] === Math.max(...data.map(r => r['2020'])) ? styles.best : (row['2020'] === Math.min(...data.map(r => r['2020'])) ? styles.worst : '')}>{row['2020']}</td>
              <td className={row['2019'] === Math.max(...data.map(r => r['2019'])) ? styles.best : (row['2019'] === Math.min(...data.map(r => r['2019'])) ? styles.worst : '')}>{row['2019']}</td>
              <td className={row['2018'] === Math.max(...data.map(r => r['2018'])) ? styles.best : (row['2018'] === Math.min(...data.map(r => r['2018'])) ? styles.worst : '')}>{row['2018']}</td>
              <td className={row['2017'] === Math.max(...data.map(r => r['2017'])) ? styles.best : (row['2017'] === Math.min(...data.map(r => r['2017'])) ? styles.worst : '')}>{row['2017']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </CardBody>
      </Card>
      </Col>
    </>
  );
};

export default SectorPerformanceTable;
