import { Card, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { ButtonAddonsHeading } from '@/utils/Constant'
import ButtonAddonsCardBody from './ButtonAddonsCardBody'
import { ButtonAddonsData } from '@/Data/Form/FormControl/FormControlData'

const ButtonAddons = () => {
   
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={ButtonAddonsHeading} subTitle={ButtonAddonsData} headClass='pb-0'/>
        <ButtonAddonsCardBody />
      </Card>
    </Col>  
  )
}

export default ButtonAddons