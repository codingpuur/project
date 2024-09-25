// @ts-nocheck
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import Rating from "react-rating";
import { StarRatingBar } from "@/utils/Constant";
import { StarRatingData } from "@/Data/BonusUi/Rating/RatingData";

const StarRating = () => {
  const [rating, setRating] = useState(1);
  return (
    <Col xl={4} md={6}>
      <Card>
        <CommonHeader title={StarRatingBar} subTitle={StarRatingData} headClass='pb-0' />
        <CardBody>
          <div className='rating'>
            <Rating initialRating={rating} emptySymbol='text-primary star fa fa-star-o fa-2x' fullSymbol='text-primary star fa fa-star fa-2x' onChange={(rate) => setRating(rate)} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarRating;
