import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { JustifyContents } from "@/utils/Constant";
import TextLeftDemo from "./TextLeftDemo";
import CommonHeader from "@/Common/CommonHeader";
import DropdownCommon from "@/CommonElements/DropdownCommon/DropdownCommon";
import { JustifyContentData, justifyData } from "@/Data/Uikits/Dropdown/DropdownData";

const JustifyContent = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={JustifyContents} subTitle={JustifyContentData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <TextLeftDemo />
            {justifyData &&
              justifyData.map((item, index) => (
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

export default JustifyContent;
