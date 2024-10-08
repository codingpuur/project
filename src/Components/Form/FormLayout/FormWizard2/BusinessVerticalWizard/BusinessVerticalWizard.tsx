import { useCallback, useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import NavComponent from './NavComponent/NavComponent';
import BusinessVerticalWizardTabContent from './BusinessVerticalWizardTabContent';
import { BusinessFormpropsType } from '@/Types/FormLayoutTypes';

const BusinessVerticalWizard:React.FC<BusinessFormpropsType> = ({heading,firstXl,secondXl,xs,horizontalWizardWrapperClassName}) => {
    const [activeTab, setActiveTab] = useState<number | undefined>(1);
    const callback = useCallback((tab: number | undefined) => {
      setActiveTab(tab);
    }, []);
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={heading} headClass='pb-0' />
        <CardBody>
          <div className={`horizontal-wizard-wrapper  vertical-variations ${horizontalWizardWrapperClassName? horizontalWizardWrapperClassName: ""}`}>
            <Row className="g-3">
              <Col xs={xs} xl={firstXl} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xs={xs} xl={secondXl}>
                <BusinessVerticalWizardTabContent activeTab={activeTab} callbackActive={callback}/>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BusinessVerticalWizard