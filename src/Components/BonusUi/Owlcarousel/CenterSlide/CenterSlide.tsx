import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { CenterSlides } from '@/utils/Constant'
import CenterMode from './CenterMode'
import { CenterSlideData } from '@/Data/BonusUi/Carousel/CarouselData'

const CenterSlide = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={CenterSlides} subTitle={CenterSlideData} headClass="pb-0"/>
        <CardBody>
          <CenterMode />
        </CardBody>
      </Card>
    </Col>
  )
}

export default CenterSlide