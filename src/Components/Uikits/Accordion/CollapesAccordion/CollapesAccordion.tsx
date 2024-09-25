import { useState } from 'react'
import { Button, Card, CardBody, Col, Collapse } from 'reactstrap'
import { ButtonwithEvent, CollapseAccordions, Linkwithhref } from '@/utils/Constant'
import CommonHeader from '@/Common/CommonHeader'
import { CollapesAccordionData } from '@/Data/Uikits/Accordion/AccordionData'

const CollapesAccordion = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6} sm={12}>
            <Card>
                <CommonHeader title={CollapseAccordions} subTitle={CollapesAccordionData} headClass='pb-0'/>
                <CardBody>
                    <div className='common-flex'>
                        <Button color="dark" onClick={toggle}>{Linkwithhref}</Button>
                        <Button color='dark' onClick={toggle}>{ButtonwithEvent}</Button>
                    </div>
                    <Collapse className={`btn-dark ${open && 'show'} mt-3`}>
                        <CardBody className="mb-0 dark-accordion text-white">{"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."}</CardBody>
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CollapesAccordion