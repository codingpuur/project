import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { OrdersStatus } from "@/utils/Constant";
import CardHeaderDropDown from "@/Common/CardHeaderDropDown";
import ReactApexChart from "react-apexcharts";
import { progressChart1, progressChart2, progressChart3, progressChart4, progressChart5 } from "@/Data/Widgets/Chart/WidgetsChart";

const OrderStatus = () => {
  return (
    <Col xl={6} lg={6} className='box-col-6 xl-50'>
      <Card>
        <CardHeader>
          <div className='header-top'>
            <h3>{OrdersStatus}</h3>
            <CardHeaderDropDown fItem='Today' sItem='Tomorrow' tItem='Yesterday' mainTitle={false} />
          </div>
        </CardHeader>
        <CardBody>
          <div className='chart-container progress-chart'>
            <ReactApexChart id='progress1' options={progressChart1} series={progressChart1.series} type='bar' height={70} />
            <ReactApexChart id='progress2' options={progressChart2} series={progressChart2.series} type='bar' height={70} />
            <ReactApexChart id='progress3' options={progressChart3} series={progressChart3.series} type='bar' height={70} />
            <ReactApexChart id='progress4' options={progressChart4} series={progressChart4.series} type='bar' height={70} />
            <ReactApexChart id='progress5' options={progressChart5} series={progressChart5.series} type='bar' height={70} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
