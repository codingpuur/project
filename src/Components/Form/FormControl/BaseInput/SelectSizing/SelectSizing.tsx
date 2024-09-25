import { Card, CardBody, Col, Input } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SelectSizingHeading } from "@/utils/Constant";
import { SelectSizingData } from "@/Data/Form/FormControl/FormControlData";

const SelectSizing = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={SelectSizingHeading} subTitle={SelectSizingData} headClass='pb-0' />
        <CardBody>
          <Input id='exampleSelect' name='select' type='select' className='form-select-sm' defaultValue={"What's Your Hobbies"}>
            <option>{"What's Your Hobbies"}</option>
            <option>{"Kho-Kho"}</option>
            <option>{"Reading Books"}</option>
            <option>{"Creativity"}</option>
          </Input>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SelectSizing;
