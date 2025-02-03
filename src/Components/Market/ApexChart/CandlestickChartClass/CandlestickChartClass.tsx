
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { apexCandleStickCharts } from "@/Data/Charts/ApexChartsData";

const CandlestickChartClass = ({ data }: any) => {
  const roundTo15Minutes = (timestamp: number) => {
    const date = new Date(timestamp);
    const minutes = Math.floor(date.getMinutes() / 15) * 15;
    date.setMinutes(minutes, 0, 0);
    return date.getTime();
  };

  // Format and sort real data
  let formattedData = Object.entries(data || {})
    .map(([date, value]: any) => [
      roundTo15Minutes(new Date(date).getTime()), 
      value.o, 
      value.h, 
      value.l, 
      value.c, 
    ])
    .sort((a, b) => a[0] - b[0]);

  // If no real data, use dummy data
  if (formattedData.length === 0) {
    return (
      <Col sm={12} xl={12} className="box-col-12">
        <Card>
          <CardBody>
            <div id="candlestick">
              <ReactApexChart
                options={apexCandleStickCharts}
                series={[{ data: generateDummyData() }]}
                type="candlestick"
                height={350}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }

    // Round a number to a specific decimal place (for example, 2 decimals)
    const roundToDecimal = (value: number, decimals: number = 2) => {
      return parseFloat(value.toFixed(decimals)); // You can adjust decimals as needed
    };

  // If real data exists, format it and make sure no gaps
  const filledData: any[] = [];
  let currentTimestamp = formattedData[0][0];
  const maxTimestamp = formattedData[formattedData.length - 1][0];
  let dataIndex = 0;

  while (currentTimestamp <= maxTimestamp) {
    if (formattedData[dataIndex] && formattedData[dataIndex][0] === currentTimestamp) {
      // If data already exists for this timestamp, use it
      filledData.push(formattedData[dataIndex]);
      dataIndex++;
    } else {
      // If no data for this timestamp, generate new data based on previous close
      const lastCandle = filledData.length > 0 ? filledData[filledData.length - 1] : formattedData[0];
      const lastClose = lastCandle ? lastCandle[4] : 100; // Default starting point (if first data)
      
      // Add a small variation to the last close to get new values
      const variation = lastClose * 0.005; // 0.5% variation
      
      // Randomize open, close, high, and low based on previous close
      const open = lastClose + (Math.random() * variation * 2 - variation);  // Open price
      const close = open + (Math.random() * variation * 2 - variation);  // Close price
      const high = Math.max(open, close) + Math.random() * variation;  // High price (max of open/close + small variation)
      const low = Math.min(open, close) - Math.random() * variation;  // Low price (min of open/close - small variation)
  
      // Push generated values to filledData
      filledData.push([currentTimestamp, roundToDecimal(open), roundToDecimal(high), roundToDecimal(low), roundToDecimal(close)]);
    }
  
    // Increment currentTimestamp by 15 minutes
    currentTimestamp += 15 * 60 * 1000;
  }
  
  const timestamps = filledData.map((d) => d[0]);
  const minDate = Math.min(...timestamps);
  const maxDate = Math.max(...timestamps);

  const chartOptions = {
    ...apexCandleStickCharts,
    xaxis: {
      type: "datetime" as "datetime",
      min: minDate,
      max: maxDate,
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM dd",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
    series: [{ data: filledData }],
    
  };

  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CardBody>
          <div id="candlestick">
            <ReactApexChart
              options={chartOptions}
              series={chartOptions.series}
              
              type="candlestick"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

// Dummy Data Generator for Smooth Candlestick Chart
const generateDummyData = () => {
  const dummyData = [];
  let currentTimestamp = Date.now();
  const lastClose = 100;

  for (let i = 0; i < 100; i++) {
    const variation = lastClose * 0.005; 
    const open = lastClose + (Math.random() * variation * 2 - variation);
    const close = open + (Math.random() * variation * 2 - variation);
    const high = Math.max(open, close) + Math.random() * variation;
    const low = Math.min(open, close) - Math.random() * variation;

    dummyData.push([currentTimestamp, open, high, low, close]);
    currentTimestamp += 15 * 60 * 1000; // Increment by 15 minutes
  }

  return dummyData;
};

export default CandlestickChartClass;
