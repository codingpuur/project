import { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { VariationsOfRightRibbons } from "@/utils/Constant";
import CommonRibbons from "../../common/CommonRibbons";
import { RightSideRibbonData, rightSideData } from "@/Data/BonusUi/Ribbons/RibbonsData";

const RightSideRibbon = () => {
  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CommonHeader title={VariationsOfRightRibbons} subTitle={RightSideRibbonData} headClass='pb-0' />
          <CardBody>
            <Row className='g-3'>
              {rightSideData &&
                rightSideData.map((item, index) => (
                  <Fragment key={index}>
                    <CommonRibbons classMain={item.classMain} ribbonClass={item.ribbonClass} ribbonText={item.ribbonText} subText={item.subText} />
                  </Fragment>
                ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RightSideRibbon;
