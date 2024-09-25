import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { SalesSummarys } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { salesSummaryChart } from "@/Data/Dashboard/ShoppingPlace/ChartData";

const SalesSummary = () => {
  return (
    <Col xxl={6} xl={4} md={12} className='box-col-4'>
      <Card>
        <CardHeader>
          <h3 className='m-0'>{SalesSummarys}</h3>
        </CardHeader>
        <CardBody className='p-0'>
          <ReactApexChart id='area-line' options={salesSummaryChart} series={salesSummaryChart.series} type='area' height={370} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesSummary;
