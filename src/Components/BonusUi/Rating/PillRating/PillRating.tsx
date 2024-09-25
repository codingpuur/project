// @ts-nocheck
import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import { PillRatingBar } from '@/utils/Constant';
import Rating from 'react-rating';
import { PillRatingData } from '@/Data/BonusUi/Rating/RatingData';

const PillRating = () => {
    const [rating, setRating] = useState(1);
    const pillData = ["A", "B", "C", "D", "E","F"];
  
    return (
      <Col xxl={4} md={6}>
        <Card>
          <CommonHeader title={PillRatingBar} subTitle={PillRatingData} headClass='pb-0'/>
          <CardBody>
            <div className="rating pill-rating-list">
              <Rating initialRating={rating} emptySymbol={pillData.map((n: string) => (<span className="pill-rating" key={n}>{n}</span>))}
                fullSymbol={pillData.map((n: string) => (<span className="pill-rating br-current" key={n}>{n}</span>))}
                onClick={(rate) => setRating(rate)}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default PillRating