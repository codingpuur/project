import ReactApexChart from "react-apexcharts";
import { Col } from "reactstrap";
import { customerChart } from "@/Data/Dashboard/CRM/ChartData";

const CustomerChart = () => {
  return (
    <Col xxl={8}>
      <ReactApexChart id="customer-chart" options={customerChart} series={customerChart.series} type="donut" height={300} />
    </Col>
  );
};

export default CustomerChart;
