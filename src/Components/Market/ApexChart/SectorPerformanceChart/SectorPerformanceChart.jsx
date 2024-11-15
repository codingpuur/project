import React from 'react';
import styles from './SectorPerformanceTable.module.css'; // Import CSS for styling
import { Card, CardBody, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';

const SectorPerformanceTable = () => {
  const data = [
    { category: 'IT', value: -24.1 },
    { category: 'Pharma', value: -8.76 },
    { category: 'Infra', value: 5.74 },
    { category: 'Banking', value: 16.62 },
    { category: 'Sensex', value: 3.44 },
    { category: 'Auto', value: 2.34 },
    { category: 'FMCG', value: 8.45 },
    { category: 'Real Estate', value: -1.22 },
    { category: 'Telecom', value: 4.56 },
    { category: 'Energy', value: -6.7 },
    { category: 'Metals', value: 12.5 },
    { category: 'Healthcare', value: 9.32 },
  ];

  const getColorClass = (value) => {
    if (value > 0) return styles.positive;
    if (value === 0) return styles.neutral;
    return styles.negative;
  };

  return (
    <Col sm={12} xl={6} className='box-col-6'>
      <Card className={styles.cardContainer}>
        <CommonHeader title="Sector Performance" headClass='pb-0' />
        <CardBody>
          <div className={styles.gridContainer}>
            {data.map((sector, index) => (
              <div key={index} className={`${styles.sectorCard} ${getColorClass(sector.value)}`}>
                <h3 className={styles.categoryText}>{sector.category}</h3>
                <p className={styles.valueText}>{sector.value}%</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SectorPerformanceTable;
