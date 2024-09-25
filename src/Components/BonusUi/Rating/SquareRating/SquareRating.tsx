// @ts-nocheck
import { useState } from "react";
import CommonHeader from "@/Common/CommonHeader";
import { Card, CardBody, Col } from "reactstrap";
import Rating from "react-rating";
import { SquareRatingBar } from "@/utils/Constant";
import { SquareRatingData } from "@/Data/BonusUi/Rating/RatingData";

const SquareRating = () => {
  const [rating, setRating] = useState(3);
  const data = [1, 2, 3, 4, 5];

  return (
    <Col  xxl={4} md={6}>
      <Card>
        <CommonHeader title={SquareRatingBar} subTitle={SquareRatingData} headClass="pb-0"/>
        <CardBody>
          <div className="rating ">
            <Rating
              initialRating={rating}
              emptySymbol={data.map((n: number) => (
                <span className="square-number" key={n}>
                  {n}
                </span>
              ))}
              fullSymbol={data.map((n: number) => (
                <span className="square-number active" key={n}>
                  {n}
                </span>
              ))}
              onChange={(rate) => setRating(rate)}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SquareRating;
