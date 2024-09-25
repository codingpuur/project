import { Button, CardHeader } from "reactstrap";
import { ChevronDown, ChevronUp } from "react-feather";
interface HeaderWithIconPropsTypes {
  setIsOpen: (parameter: boolean) => void;
  isOpen: boolean;
  Heading: string;
}
const HeaderWithIcon = ({ setIsOpen, isOpen, Heading }: HeaderWithIconPropsTypes) => {
  return (
    <CardHeader>
      <h2 className='mb-0'>
        <Button block className='btn-link text-start d-flex justify-content-between' onClick={() => setIsOpen(!isOpen)} color='transperant'>
          {Heading}
          {isOpen ? <ChevronUp className='m-0' /> : <ChevronDown className='m-0' />}
        </Button>
      </h2>
    </CardHeader>
  );
};

export default HeaderWithIcon;
