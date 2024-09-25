import { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import NavComponent from './NavComponent/NavComponent';
import CustomFormTabContent from './CustomFormTabContent';
import { CustomWizardFormPropsType } from '@/Types/FormLayoutTypes';

const CustomHorizontalWizard:React.FC<CustomWizardFormPropsType> = ({heading,horizontalWizardWrapperClassName,xs,firstXl,secondXl}) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={heading} headClass='pb-0' />        
        <CardBody>
          <div className={`horizontal-wizard-wrapper ${horizontalWizardWrapperClassName}`}>
            <Row className="g-3">
              <Col xl={firstXl} xs={xs} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xl={secondXl} xs={xs}>
                <CustomFormTabContent activeTab={activeTab} callbackActive={callback}/>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomHorizontalWizard