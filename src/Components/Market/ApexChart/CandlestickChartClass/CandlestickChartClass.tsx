// import { Card, CardBody, Col } from "reactstrap";
// import CommonHeader from "@/Common/CommonHeader";
// import { CandlestickChart } from "@/utils/Constant";
// import ReactApexChart from "react-apexcharts";
// import { apexCandleStickCharts } from "@/Data/Charts/ApexChartsData";

// const CandlestickChartClass = ({data}:any) => {
//   return (
//     <Col sm={12} xl={12} className="box-col-12">
//       <Card>
   
//         <CardBody>
//           <div id="candlestick">
//             <ReactApexChart
//               options={apexCandleStickCharts}
//               series={apexCandleStickCharts.series}
//               type="candlestick"
//               height={350}
//             />
//           </div>
//         </CardBody>
//       </Card>
//     </Col>
//   );
// };

// export default CandlestickChartClass;



import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { apexCandleStickCharts } from "@/Data/Charts/ApexChartsData"; // Assuming this contains default chart options

const CandlestickChartClass = ({data}: any) => {
  // Format data to the structure required by ApexCharts

 
 

const formattedData = Object.entries(data || {}).slice(0,50).map(([date, value]:any) => ([
   new Date(date).getTime(), // Convert date to timestamp
  value.o,                  // Open
  value.l,                  // Low
  value.h,                  // High
  value.c                   // Close                /
]));


  // Update ApexChart options to use formatted data
  const chartOptions = {
    ...apexCandleStickCharts, // Spread existing options
    series: [{
      data: formattedData, // Replace default series with formatted data
    }],
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
