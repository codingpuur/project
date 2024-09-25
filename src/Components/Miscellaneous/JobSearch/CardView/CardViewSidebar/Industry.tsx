import { Button, Card, Col, Collapse } from "reactstrap";
import { useState } from "react";
import { AllIndustries, IndustryHeading } from "@/utils/Constant";
import IndustryCheckBox from "./IndustryCheckBox";
import HeaderWithIcon from "@/CommonElements/HeaderWithIcon";

const Industry = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <IndustryCheckBox />
          <Button block className='text-center' color='primary'>
            {AllIndustries}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Industry;
