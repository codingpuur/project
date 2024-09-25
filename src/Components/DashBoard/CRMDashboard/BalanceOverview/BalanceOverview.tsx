import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { BalanceOverviews } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { balanceOverviewChart } from "@/Data/Dashboard/CRM/ChartData";

const BalanceOverview = () => {
  return (
    <Col xl={7}>
      <Card>
        <CardHeader className="pb-0">
          <div className="header-top">
            <h3 className="m-0">{BalanceOverviews}</h3>
          </div>
        </CardHeader>
        <CardBody>
          <ReactApexChart id="balance-overview" options={balanceOverviewChart} series={balanceOverviewChart.series} type="bar" height={310}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BalanceOverview;
