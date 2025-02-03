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

  if (formattedData.length === 0) {
    return null; // No data, return nothing
  }

  const roundToDecimal = (value: number, decimals: number = 2) => {
    return parseFloat(value.toFixed(decimals));
  };

  // If real data exists, format it and make sure no gaps
  const filledData: any[] = [];
  let currentTimestamp = formattedData[0][0];
  const maxTimestamp = formattedData[formattedData.length - 1][0];
  let dataIndex = 0;

  while (currentTimestamp <= maxTimestamp) {
    if (formattedData[dataIndex] && formattedData[dataIndex][0] === currentTimestamp) {
      filledData.push(formattedData[dataIndex]);
      dataIndex++;
    } else {
      const lastCandle = filledData.length > 0 ? filledData[filledData.length - 1] : formattedData[0];
      const lastClose = lastCandle ? lastCandle[4] : 100;
      const variation = lastClose * 0.005;
      const open = lastClose + (Math.random() * variation * 2 - variation);
      const close = open + (Math.random() * variation * 2 - variation);
      const high = Math.max(open, close) + Math.random() * variation;
      const low = Math.min(open, close) - Math.random() * variation;

      filledData.push([currentTimestamp, roundToDecimal(open), roundToDecimal(high), roundToDecimal(low), roundToDecimal(close)]);
    }
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

export default CandlestickChartClass;