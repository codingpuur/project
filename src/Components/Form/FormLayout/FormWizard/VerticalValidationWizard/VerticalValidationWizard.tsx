import { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import { verticalValidationWizardHeading } from '@/utils/Constant';
import NavComponent from './NavComponent/NavComponent';
import VerticalValidationWizardTabComponent from './VerticalValidationWizardTabComponent/VerticalValidationWizardTabComponent';
import { verticalValidationWizardHeadingData } from '@/Data/Form/FormLayout/FormWizardData';

const VerticalValidationWizard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeCallBack = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <Col md={12}>
      <Card className='custom-validation-wizard'>
        <CommonHeader
          title={verticalValidationWizardHeading}
          subTitle={verticalValidationWizardHeadingData}
          headClass='pb-0'
        />
        <CardBody>
          <div className="vertical-main-wizard">
            <Row className="g-3"> 
              <Col xxl={3} xl={4} xs={12}> 
                <NavComponent callbackActive={activeCallBack} activeTab={activeTab} />
              </Col> 
              <Col xxl={9} xl={8} xs={12}>
                <VerticalValidationWizardTabComponent activeTab={activeTab} activeCallBack={activeCallBack} />
              </Col>
            </Row> 
          </div> 
        </CardBody>
      </Card>
    </Col>
  )
}

export default VerticalValidationWizard