//@ts-nocheck
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import Rating from "react-rating";
import { HeartRatingBar } from "@/utils/Constant";
import { HeartRatingData } from "@/Data/BonusUi/Rating/RatingData";

const HeartRating = () => {
  const [rating, setRating] = useState(3);

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={HeartRatingBar} subTitle={HeartRatingData} headClass='pb-0' />
        <CardBody>
          <div className='rating'>
            <Rating initialRating={rating} emptySymbol='text-primary fa fa-heart-o fa-2x' fullSymbol='text-primary fa fa-heart fa-2x' onClick={(rate: number) => setRating(rate)} />
            <span className='text-primary ms-3 mb-1 current-rating'>{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeartRating;
