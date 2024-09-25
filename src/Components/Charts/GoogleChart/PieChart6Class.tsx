import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RotatingPieChart } from "@/utils/Constant";
import Chart from "react-google-charts";
import { pieChart6Data, pieChart6option } from "@/Data/Charts/GoogleChartData";

const PieChart6Class = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={RotatingPieChart} headClass='pb-0' />
        <CardBody className='chart-block'>
          <div className='chart-overflow custom-rotating' id='pie-chart1'>
            <Chart
              width={"100%"} 
              height={"300px"}
              chartType={"Gantt"}
              loader={<div>{"Loading Chart"}</div>}
              data={pieChart6Data}
              options={pieChart6option}
              rootProps={{
                "data-testid": "1",
              }}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart6Class;
