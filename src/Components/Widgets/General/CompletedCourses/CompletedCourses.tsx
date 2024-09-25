import { Card, CardBody, Col, Row } from "reactstrap";
import { completeCourseData } from "@/Data/Widgets/General/General";
import SVG from "@/utils/CommonSvgIcon/SVG";
import Link from "next/link";
import SquareGroup from "@/CommonElements/SquareGroup/SquareGroup";

const CompletedCourses = () => {
  return (
    <Col xxl={3} xl={4} md={6} className='box-col-6'>
      <Row>
        {completeCourseData.map((data, index) => (
          <Col sm={12} key={index}>
            <Card className='course-box widget-course'>
              <CardBody>
                <div className='course-widget'>
                  <div className={`course-icon ${data.class}`}>
                    <SVG iconId={data.svg1} />
                  </div>
                  <div>
                    <h4 className='mb-0'>{data.count}</h4>
                    <span className='f-light'>{data.header}</span>
                    <Link className='btn btn-light f-light' href={data.link}>
                      {data.btn}
                      <span className='ms-2'>
                        <SVG iconId={data.svg2} />
                      </span>
                    </Link>
                  </div>
                </div>
              </CardBody>
              <SquareGroup />
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default CompletedCourses;
