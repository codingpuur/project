import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { ProductSale } from "@/utils/Constant";
import ReactApexChart from "react-apexcharts";
import { productSalesChart } from "@/Data/Dashboard/ShoppingPlace/ChartData";

const ProductSales = () => {
  return (
    <Col xl={4} md={6} sm={12} className="box-col-4 order-xl-1">
      <Card className="product-chart">
        <CardHeader className="pb-0">
          <div className="header-top">
            <h3 className="m-0">{ProductSale}</h3>
          </div>
        </CardHeader>
        <CardBody className="pb-0">
          <div className="d-flex">
            <h3 className="me-2">$12,000</h3>
            <span>(15,080 To Goal)</span>
          </div>
          <ReactApexChart
            id="product-sales"
            options={productSalesChart}
            series={productSalesChart.series}
            height={295}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductSales;
