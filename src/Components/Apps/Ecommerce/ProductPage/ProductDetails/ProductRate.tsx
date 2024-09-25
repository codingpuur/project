import { Col, Row } from "reactstrap";
import { RateNow } from "@/utils/Constant";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

const ProductRate = () => {
  const [rating, setRating] = useState(1);
  const changeRating = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <Row>
      <Col md={4}>
        <h3 className="product-title">{RateNow}</h3>
      </Col>
      <Col md={8}>
        <div className="d-flex">
            <Rating
              onClick={changeRating}
              initialValue={rating}
              size={17}
              style={{ padding: "0" }}
            />
          <span>(250 review)</span>
        </div>
      </Col>
    </Row>
  );
};

export default ProductRate;
