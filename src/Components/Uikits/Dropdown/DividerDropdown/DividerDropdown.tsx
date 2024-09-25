import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { DividerDropdowns } from "@/utils/Constant";
import DividerBody from "./DividerBody";
import CommonHeader from "@/Common/CommonHeader";
import { DividerCommonData, DividerDropdownData,  } from "@/Data/Uikits/Dropdown/DropdownData";

const DividerDropdown = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={DividerDropdowns} subTitle={DividerDropdownData} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {DividerCommonData &&
              DividerCommonData.map((item, index) => (
                <Fragment key={index}>
                  <DividerBody item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerDropdown;
