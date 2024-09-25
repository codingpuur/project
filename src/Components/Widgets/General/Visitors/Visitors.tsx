import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Visitor } from "@/utils/Constant";
import SVG from "@/utils/CommonSvgIcon/SVG";
import CardHeaderDropDown from "@/Common/CardHeaderDropDown";
import ReactApexChart from "react-apexcharts";
import { optionsVisitor } from "@/Data/Widgets/General/GeneralCharts";

const Visitors = () => {
  return (
    <Col xxl={5} xl={3} md={12} className="box-col-12">
      <Card className="visitor-card">
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <h3 className="m-0">
              {Visitor}
              <span className="f-14 font-primary f-w-600 ms-1">
                <SVG iconId="user-visitor"/>
                (+2.8)
              </span>
            </h3>
            <CardHeaderDropDown fItem="Today" sItem="Tomorrow" tItem="Yesterday" mainTitle={true} />
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="visitors-container"> 
            <ReactApexChart id="visitor-chart" options={optionsVisitor} series={optionsVisitor.series} type="bar" height={290}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Visitors;
