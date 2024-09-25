import { Card, CardBody, Col } from "reactstrap";
import { WithInputType } from "@/utils/Constant";
import DropdownInput from "./DropdownInput";
import CommonHeader from "@/Common/CommonHeader";
import { DropdownwithInputData } from "@/Data/Uikits/Dropdown/DropdownData";

const DropdownwithInput = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal with-input-type">
        <CommonHeader title={WithInputType} subTitle={DropdownwithInputData} headClass="pb-0"/>
        <CardBody>
          <div className="common-flex">
            <div className="btn-group">
              <DropdownInput />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DropdownwithInput;
