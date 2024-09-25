import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { FollowersGrowths } from "@/utils/Constant";
import CardHeaderDropDown from "@/Common/CardHeaderDropDown";
import ReactApexChart from "react-apexcharts";
import { growthOptions } from "@/Data/Widgets/General/GeneralCharts";

const FollowersGrowth = () => {
  return (
    <Col xl={12}>
      <Card className='growth-wrap'>
        <CardHeader className='card-no-border pb-0'>
          <div className='header-top'>
            <h3>{FollowersGrowths}</h3>
            <CardHeaderDropDown fItem='Weekly' sItem='Monthly' tItem='Yearly' mainTitle={true} />
          </div>
        </CardHeader>
        <CardBody>
          <div className='growth-wrapper'>
            <ReactApexChart id='growthchart' options={growthOptions} series={growthOptions.series} type='line' height='80' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FollowersGrowth;
