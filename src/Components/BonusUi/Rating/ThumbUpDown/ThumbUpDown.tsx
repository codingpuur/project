// @ts-nocheck
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import Rating from "react-rating";
import { ThumbUpDownRate } from "@/utils/Constant";
import { ThumbUpDownData } from "@/Data/BonusUi/Rating/RatingData";

const ThumbUpDown = () => {
  const [thumbs, setThumbs] = useState(4);
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={ThumbUpDownRate} subTitle={ThumbUpDownData} headClass='pb-0' />
        <CardBody>
          <div className='rating'>
            <Rating initialRating={thumbs} emptySymbol='text-primary fa fa-thumbs-down fa-2x' fullSymbol='text-primary fa fa-thumbs-up fa-2x' onClick={(rate) => setThumbs(rate)} />
            <span className='text-primary ms-2 mt-1 current-rating'>{thumbs}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThumbUpDown;
