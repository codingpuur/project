//@ts-nocheck
import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import Rating from 'react-rating';
import { HalfStarRatingBar } from '@/utils/Constant';
import { HalfStarRatingData } from '@/Data/BonusUi/Rating/RatingData';

const HalfStarRating = () => {
    const [rating, setRating] = useState(1.5);
    return (
      <Col xxl={4} md={6}>
        <Card>
          <CommonHeader title={HalfStarRatingBar} subTitle={HalfStarRatingData} headClass='pb-0'/>
          <CardBody>
            <div className="rating">
              <Rating initialRating={rating} fractions={2} emptySymbol="text-primary star fa fa-star-o fa-2x" fullSymbol="text-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
              <span className="text-primary current-rating">{rating}</span>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default HalfStarRating