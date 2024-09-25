// @ts-nocheck
import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import { RatingBars } from '@/utils/Constant';
import Rating from 'react-rating';
import { BarRatingData } from '@/Data/BonusUi/Rating/RatingData';

const SimpleRatingBar = () => {
  const [rating, setRating] = useState(8);
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={RatingBars} subTitle={BarRatingData} headClass='pb-0'/>
        <CardBody>
          <div className="rating">
            <Rating stop={10} initialRating={rating} emptySymbol="br-selected" fullSymbol="br-selected br-current" onChange={(rate) => setRating(rate)} />
            <span className="current-rating">{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
 
export default SimpleRatingBar