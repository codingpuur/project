import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Finances } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { financeChart } from "@/Data/Widgets/Chart/WidgetsChart";

const Finance = () => {
  return (
    <Col xl={5} lg={12} className="box-col-5">
      <Card>
        <CardHeader>
          <h3>{Finances}</h3>
        </CardHeader>
        <CardBody>
          <div className="chart-container column-container">
            <ReactApexChart
              id="columnchart"
              options={financeChart}
              series={financeChart.series}
              type="line"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Finance;
