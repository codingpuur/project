import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface OptionData {
  ask: number;
  bid: number;
  fyToken: string;
  ltp: number;
  ltpch: number;
  ltpchp: number;
  oi: number;
  oich: number;
  oichp: number;
  option_type: string;
  prev_oi: number;
  strike_price: number;
  symbol: string;
  volume: number;
  iv: number | null;
}
interface Data {
  CE: Record<string, OptionData>; // Record<string, OptionData> means an object with dynamic keys and 'OptionData' as its value
}

// Define the component props interface
interface LineChartClassProps {
  data: Data; // The 'data' prop should match the 'Data' interface
}

const LineChartClass = ({data}:LineChartClassProps) => {

  

  // Format data for the chart
//   const formattedData = Object.entries(data?.CE)?.map(([key, value]) => ({
//     x: value?.strike_price,
//     y: value?.iv !== null ? value?.iv : 0 // Handle cases where 'iv' is null
//   }));
const formattedData = data
? Object.entries(data).map(([key, value]) => ({
    x: value?.strike_price,
    y: value?.iv !== null ? value?.iv : 0 // Handle cases where 'iv' is null
  }))
: []; 

  // Chart.js configuration
  const chartData = {
    labels: formattedData.map((item) => item.x),  // X-axis labels (Strike Price)
    datasets: [
      {
        label: 'IV vs Strike Price',
        data: formattedData.map((item) => item.y),  // Y-axis values (IV)
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
        pointRadius: 5, // Optional: To make the data points visible
        borderWidth: 2 // Optional: Line thickness
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Strike Price'
        }
      },
      y: {
        title: {
          display: true,
          text: 'IV'
        }
      }
    }
  };

  return (
    <Col sm={12} xl={6} className="box-col-12">
      <Card>
        <CommonHeader title="Stepline Chart" headClass="pb-0" />
        <CardBody>
          <div id="stepline">
            <Line data={chartData} options={options} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChartClass;
