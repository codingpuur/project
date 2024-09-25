import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultInputMask, InputMasks } from "@/utils/Constant";
import DateFormat from "./DateFormat";
import TimeFormat from "./TimeFormat";
import DefaultInputMaskForm from "./DefaultInputMaskForm";
import { InputMasksContainerData } from "@/Data/Form/FormControl/FormControlData";

const InputMasksContainer = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={InputMasks} subTitle={InputMasksContainerData} headClass='pb-0' />
        <CardBody>
          <Row className=' g-3'>
            <DateFormat />
            <TimeFormat />
            <Col xs={12}>
              <div className='card-wrapper border rounded-3 light-card checkbox-checked'>
                <h6 className='sub-title'>{DefaultInputMask}</h6>
                <DefaultInputMaskForm />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InputMasksContainer;
