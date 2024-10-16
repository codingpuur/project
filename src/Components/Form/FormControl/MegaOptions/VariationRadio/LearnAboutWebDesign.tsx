import { Col, FormGroup, Input, Label } from "reactstrap";
import { MostImportantThingsToLearnAboutWebDesign } from "@/utils/Constant";
import { webDesignCourseList } from "@/Data/Form/FormControl/FormControlData";

const LearnAboutWebDesign = () => {
  return (
    <Col xl={4} md={6}>
      <div className='card-wrapper border rounded-3 h-100 checkbox-checked'>
        <h6 className='sub-title'>{MostImportantThingsToLearnAboutWebDesign}</h6>
        {webDesignCourseList.map((data, index) => (
          <div className='payment-wrapper' key={index}>
            <div className='payment-first'>
              <FormGroup check className='radio radio-primary'>
                <Input id={`WebDesign-${index}`} type='radio' name='radio3' defaultChecked={data === "C. Javascript" ? true : false} />
                <Label className='form-check-label mb-0' htmlFor={`WebDesign-${index}`}>
                  {data}
                </Label>
              </FormGroup>
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default LearnAboutWebDesign;
