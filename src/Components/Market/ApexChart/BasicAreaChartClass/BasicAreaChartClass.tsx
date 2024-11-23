// import { Card, CardBody, Col } from 'reactstrap'
// import CommonHeader from '@/Common/CommonHeader'
// import { BasicAreaChart } from '@/utils/Constant'
// import ReactApexChart from 'react-apexcharts'
// import { apexAreaChart } from '@/Data/Charts/ApexChartsData'

// const BasicAreaChartClass = () => {
//   return (
//     <Col sm={12} xl={6} className='box-col-6'>
//         <Card>
//           <CommonHeader title={BasicAreaChart} headClass='pb-0'/>
//           <CardBody>
//             <div id='basic-apex'>
//               <ReactApexChart options={apexAreaChart} series={apexAreaChart.series} type="area" height={350} />
//             </div>
//           </CardBody>
//         </Card>
//     </Col>
//   )
// }

// export default BasicAreaChartClass
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { apexAreaChart } from "@/Data/Charts/ApexChartsData"; // Assuming this contains default chart options

const AreaChartClass = ({ data }: any) => {
  // Format data to the structure required by ApexCharts for area chart

  const formattedData = Object.entries(data || {}).map(([date, value]:any) => ({
    x: new Date(date).getTime(), // Convert date to timestamp
    y: value.c                  // Use 'close' as the value to display
}));


  // Update ApexChart options to use formatted data
  const chartOptions = {
    ...apexAreaChart, // Spread existing options
    series: [{
      data: formattedData, // Replace default series with formatted data
    }],
  };

  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CardBody>
          <div id="area-chart">
            <ReactApexChart
              options={chartOptions}
              series={chartOptions.series}
              type="area"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AreaChartClass;
