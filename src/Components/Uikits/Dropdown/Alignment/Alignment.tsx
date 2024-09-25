import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Alignments } from "@/utils/Constant";
import AlignTopDemo from "./AlignTopDemo";
import CommonHeader from "@/Common/CommonHeader";
import { AlignmentDrodown, alignmentData } from "@/Data/Uikits/Dropdown/DropdownData";
import DropdownCommon from "@/CommonElements/DropdownCommon/DropdownCommon";

const Alignment = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={Alignments} subTitle={AlignmentDrodown} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <AlignTopDemo />
            {alignmentData &&
              alignmentData.map((item, index) => (
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

export default Alignment;
