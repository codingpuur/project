import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RotatingPieChart } from "@/utils/Constant";
import Chart from "react-google-charts";
import { googleChartDatas } from "@/Data/Charts/GoogleChartData";

const PieChart4Class = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={RotatingPieChart} headClass='pb-0' />
        <CardBody className='chart-block'>
          <div className='chart-overflow custom-g-chart' id='pie-chart1'>
            <Chart
              width={"100%"}
              height={"400px"}
              chartType={"PieChart"}
              loader={<div>{"Loading Chart"}</div>}
              data={googleChartDatas.GoogleRotatingPieChart1.data}
              options={
                googleChartDatas.GoogleRotatingPieChart1.option && {
                  pieStartAngle: 100,
                } && {
                  pieSliceText: "label",
                }
              }
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart4Class;
