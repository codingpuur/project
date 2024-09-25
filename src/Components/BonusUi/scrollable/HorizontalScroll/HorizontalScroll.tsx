import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { HorizontalScrollbar } from "@/utils/Constant";
import ScrollBar from "react-perfect-scrollbar";
import { HorizontalScrollData, horizontalData } from "@/Data/BonusUi/scrollable/scrollableData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const HorizontalScroll = () => {
  return (
    <Col xl={6}>
      <Card >
        <CommonHeader title={HorizontalScrollbar} subTitle={HorizontalScrollData} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: 300 }} >
            <div className="horz-scroll-content">
              <Row>
                {horizontalData &&
                  horizontalData.map((item, index) => ( 
                    <Col sm={2} key={index}>
                      <div className="horizontal-img">
                        <Image className="img-fluid" src={`${ImagePath}/scrollbar/${item}`} alt="girl" height={640} width={640}/>
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScroll;
