import { Card, CardBody, Col } from "reactstrap";
import { UniqueDropdowns } from "@/utils/Constant";
import DropdownForm from "./DropdownForm";
import DropdownText from "./DropdownText";
import CommonHeader from "@/Common/CommonHeader";
import { UniqeDropdownData } from "@/Data/Uikits/Dropdown/DropdownData";

const UniqeDropdown = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={UniqueDropdowns} subTitle={UniqeDropdownData} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <DropdownForm />
            <DropdownText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UniqeDropdown;
