import { Card, CardBody, Col } from "reactstrap";
import { DropdownSizings } from "@/utils/Constant";
import LargeDropdown from "./LargeDropdown";
import SmallDropdown from "./SmallDropdown";
import CommonHeader from "@/Common/CommonHeader";
import { DropdownSizeData } from "@/Data/Uikits/Dropdown/DropdownData";

const DropdownSize = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={DropdownSizings} subTitle={DropdownSizeData} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <LargeDropdown />
            <SmallDropdown />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DropdownSize;
