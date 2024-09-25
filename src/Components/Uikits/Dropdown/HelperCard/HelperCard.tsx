import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { HelperCards } from "@/utils/Constant";
import HelperBody from "./HelperBody";
import CommonHeader from "@/Common/CommonHeader";
import { HelperCardTopdata, helperCardData } from "@/Data/Uikits/Dropdown/DropdownData";

const HelperCard = () => {
  return (
    <Col xl={6}>
      <Card className="custom-helper-card">
        <CommonHeader title={HelperCards} subTitle={HelperCardTopdata} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex"> 
            {helperCardData &&
              helperCardData.map((item, index) => (
                <Fragment key={index}>
                  <HelperBody item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HelperCard;
