import { Fragment } from "react";
import { ButtonGroup, Card, CardBody, Col } from "reactstrap";
import RoundedDemo from "./RoundedDemo";
import { RoundedDropdowns } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { RoundedDropdownData, roundedDropdownData } from "@/Data/Uikits/Dropdown/DropdownData";
import DropdownCommon from "@/CommonElements/DropdownCommon/DropdownCommon";

const RoundedDropdown = () => {
  return (
    <Col xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={RoundedDropdowns} subTitle={RoundedDropdownData} headClass='pb-0' />
        <CardBody className='rtl-dropdown'>
          <div className='common-flex'>
            <ButtonGroup>
              <RoundedDemo />
            </ButtonGroup>
            {roundedDropdownData &&
              roundedDropdownData.map((item, index) => (
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

export default RoundedDropdown;
