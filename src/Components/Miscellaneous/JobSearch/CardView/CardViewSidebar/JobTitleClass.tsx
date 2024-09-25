import { Button, Card, Col, Collapse } from 'reactstrap'
import { useState } from 'react';
import { AllJobTitle, JobHeading } from '@/utils/Constant';
import JobTitleCheckBox from './JobTitleCheckBox';
import HeaderWithIcon from '@/CommonElements/HeaderWithIcon';

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={JobHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <JobTitleCheckBox />
          <Button block className="text-center" color="primary">
            {AllJobTitle}
          </Button>
        </Collapse>
      </Card>
    </Col>
  )
}

export default JobTitleClass