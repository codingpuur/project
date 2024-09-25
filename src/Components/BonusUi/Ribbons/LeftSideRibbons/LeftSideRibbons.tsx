import { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { VariationsOfLeftRibbons } from "@/utils/Constant";
import CommonRibbons from "../../common/CommonRibbons";
import { LeftSideRibbonsData, leftSideData } from "@/Data/BonusUi/Ribbons/RibbonsData";

const LeftSideRibbons = () => {
  return (
    <Col sm={12} xl={12}>
      <Card>
        <CommonHeader title={VariationsOfLeftRibbons} subTitle={LeftSideRibbonsData} headClass='pb-0' />
        <CardBody>
          <Row className='g-3'>
            {leftSideData &&
              leftSideData.map((item, index) => (
                <Fragment key={index}>
                  <CommonRibbons classMain={item.classMain} ribbonClass={item.ribbonClass} ribbonText={item.ribbonText} subText={item.subText} />
                </Fragment>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftSideRibbons;
