import { Col, FormGroup, Input } from 'reactstrap';
import { switchColor } from '@/Data/Form/FormWidgets/SwitchData';
import { CommonCustomSwitchType } from '@/Types/FormWingetsType';

const CommonCustomSwitch:React.FC<CommonCustomSwitchType> = ({cardWrapperClassName,formCheckSizeClassName,disabled}) => {
  return (
    <Col md={4} sm={6}>
      <div className={`card-wrapper border rounded-3 ${cardWrapperClassName?cardWrapperClassName:""}`}>
        <div className={`form-check-size ${formCheckSizeClassName?formCheckSizeClassName :""}`}>
          {switchColor.map((data, index) => (
            <FormGroup check switch inline key={index}>
              <Input className={`switch-${data} check-size`} type="checkbox" role="switch" defaultChecked disabled={disabled?true:false}/>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default CommonCustomSwitch