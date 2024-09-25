import { switchColor } from "@/Data/Form/FormWidgets/SwitchData";
import { CardBody, Input, Label, Media } from "reactstrap";

const DisabledOutlineSwitchCardBody = () => {
  return (
    <CardBody className='common-flex'>
      {switchColor.map((data, index) => (
        <Media key={index}>
          <Media body className='text-end icon-state switch-outline'>
            <Label className='switch mb-0'>
              <Input type='checkbox' />
              <span className={`switch-state bg-${data}`} />
            </Label>
          </Media>
        </Media>
      ))}
    </CardBody>
  );
};

export default DisabledOutlineSwitchCardBody;
