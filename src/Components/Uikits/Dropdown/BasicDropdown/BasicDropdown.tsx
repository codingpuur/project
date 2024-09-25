import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { BasicDropdowns } from "@/utils/Constant";
import BasicDemo from "./BasicDemo";
import CommonHeader from "@/Common/CommonHeader";
import { BasicDropdownTopData, basicDropdownData } from "@/Data/Uikits/Dropdown/DropdownData";
import DropdownCommon from "@/CommonElements/DropdownCommon/DropdownCommon";

const BasicDropdown = () => {
  return (
    <Col xl={6}>
      <Card className="basic-dropdown">
        <CommonHeader title={BasicDropdowns} subTitle={BasicDropdownTopData} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <BasicDemo />
            {basicDropdownData &&
              basicDropdownData.map((item, index) => (
                <Fragment key={index}>
                  <DropdownCommon item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicDropdown;
