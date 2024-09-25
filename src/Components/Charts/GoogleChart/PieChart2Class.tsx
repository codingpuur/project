import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { PieChart } from "@/utils/Constant";
import Chart from "react-google-charts";
import { googleChartDatas } from "@/Data/Charts/GoogleChartData";

const PieChart2Class = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={`${PieChart}${2}`} headClass='pb-0' />
        <CardBody className='chart-block'>
          <div className='chart-overflow' id='pie-chart1'>
            <Chart width={"100%"} height={"400px"} chartType={"PieChart"} loader={<div>{"Loading Chart"}</div>} data={googleChartDatas.GooglePieChart2.data} options={googleChartDatas.GooglePieChart2.option && { is3D: true }} rootProps={googleChartDatas.GooglePieChart2.rootProps} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart2Class;
