// @ts-nocheck
import { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import Rating from "react-rating";
import { ReversedRatingBar } from "@/utils/Constant";
import { ReverseRatingData } from "@/Data/BonusUi/Rating/RatingData";

const ReverseRating = () => {
  const [rating, setRating] = useState(3);
  const [status, setStatus] = useState("Disagree");
  const data = [1, 2, 3, 4, 5];

  useEffect(() => {
    switch (rating) {
      case 1:
        setStatus("Strongly Disagree");
        break;
      case 2:
        setStatus("Agree");
        break;
      case 3:
        setStatus("Neither Agree or Disagree");
        break;
      case 4:
        setStatus("Disagree");
        break;
      default:
        setStatus("Strongly Disagree");
        break;
    }
  }, [rating]);
  return (
    <Col xl={4} md={6}>
      <Card>
        <CommonHeader title={ReversedRatingBar} subTitle={ReverseRatingData} headClass='pb-0' />
        <CardBody>
          <div className='rating reverse'>
            <Rating
              initialRating={rating}
              emptySymbol={data.map((n) => (
                <span className='square-number active' key={n} />
              ))}
              fullSymbol={data.map((n) => (
                <span className='square-number bg-primary border-primary' key={n} />
              ))}
              direction='rtl'
              onChange={(rate: number) => {
                setRating(rate);
              }}
            />
            <span className='text-primary current-rating fs-6 ms-5'>{status}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ReverseRating;
