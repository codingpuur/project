import { Badge, Card, Col, Input, Label, Media } from "reactstrap";
import { BuyingOptionHeading, StartRatingHeading } from "@/utils/Constant";
import { horizontalStyleFormBuyingOptionsData } from "@/Data/Form/FormControl/FormControlData";

const BuyingOption = () => {
  return (
    <>
      <Col sm={3}>
        <p className="mega-title">{BuyingOptionHeading}</p>
      </Col>
      {horizontalStyleFormBuyingOptionsData.map((data, index) => (
        <Col sm={9} className={data.colClassName ? data.colClassName : ""} key={index}>
          <Card>
            <div className="p-20 d-flex">
              <div className={`radio form-check radio-${data.className} m-0 w-100`}>
                <Input id={`buyingOptionsHorizontal${index}`} type="radio" name="radio23"/>
                <Label className="form-check-label mb-0 w-100" htmlFor={`buyingOptionsHorizontal${index}`} >
                  <Media body>
                    <span className="mt-0 mega-title-badge">
                      {data.tittle}
                      <Badge color={data.className} className={`pull-right digits`} >
                        {data.price}
                      </Badge>
                    </span>
                    <span className="rating-star-wrapper">
                      {data.starRating.map((star, index) => (
                        <i key={index} className={`icofont icofont-star ${star}`}/>
                      ))}
                      {data.totalRating}
                      {StartRatingHeading}
                    </span>
                  </Media>
                </Label>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BuyingOption;
