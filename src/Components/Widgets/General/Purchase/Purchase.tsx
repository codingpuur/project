import { Card, CardBody, Col } from "reactstrap";
import { purchaseData } from "@/Data/Widgets/General/General";
import SVG from "@/utils/CommonSvgIcon/SVG";

const Purchase = () => {
  return (
    <>
      {purchaseData.map((data,index) => (
        <Col sm={6} xl={3} lg={6} className="box-col-6" key={index}>
          <Card className="widget-1">
            <CardBody>
              <div className="widget-content">
                <div className={`widget-round ${data.color}`}>
                  <div className="bg-round">
                    <SVG iconId={data.svg} className="svg-fill" />
                    <SVG iconId={data.svg2} className="half-circle svg-fill"/>
                  </div>
                </div>
                <div>
                  <h4>{data.count}</h4>
                  <span className="f-light">{data.title}</span>
                </div>
              </div>
              <div className={`font-${data.color} f-w-600`}>
                <i className={`${data.icon} icon-rotate me-1`} />
                <span>{data.result}</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Purchase;
