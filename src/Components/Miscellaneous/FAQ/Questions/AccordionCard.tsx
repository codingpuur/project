import { AccordionCardPropsType } from "@/Types/MiscellaneousTypes";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "react-feather";
import { Button, Card, CardBody, CardHeader, Collapse } from "reactstrap";

const AccordionCard: React.FC<AccordionCardPropsType> = ({ item }) => {
  const [isActivity, setIsActivity] = useState(false);
  const handelChange = () => {
    setIsActivity(!isActivity);
  };
  return (
    <Card>
      <CardHeader>
        <h3 className='mb-0'>
          <Button color='link ps-0  d-flex align-items-center gap-2 justify-content-between' onClick={handelChange}>
            <span className='d-flex align-items-center gap-2'>
              <HelpCircle />
              {item.title}
            </span>
            {isActivity ? <ChevronUp className='position-relative inset-0 m-0' /> : <ChevronDown className='position-relative inset-0 m-0' />}
          </Button>
        </h3>
      </CardHeader>
      <Collapse isOpen={isActivity}>
        <CardBody>{item.paragraph}</CardBody>
      </Collapse>
    </Card>
  );
};

export default AccordionCard;
