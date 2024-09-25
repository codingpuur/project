import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DonutChart } from "@/utils/Constant";
import Chart from "react-google-charts";
import { googleChartDatas } from "@/Data/Charts/GoogleChartData";

const PieChart3Class = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={`${DonutChart}${3}`} headClass='pb-0' />
        <CardBody className='chart-block'>
          <div className='chart-overflow' id='pie-chart1'>
            <Chart width={"100%"} height={"400px"} chartType={"PieChart"} loader={<div>{"Loading Chart"}</div>} data={googleChartDatas.GoogleDonutChart.data} options={googleChartDatas.GoogleDonutChart.option && { pieHole: 0.4 }} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart3Class;
