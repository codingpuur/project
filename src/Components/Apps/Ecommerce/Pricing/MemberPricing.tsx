import { Button, Col } from "reactstrap";
import { pricingData } from "@/Data/Apps/Ecommerce/PricingData";
import { Href, SignUp } from "@/utils/Constant";

const MemberPricing = () => {
  return (
    <>
      {pricingData.map((data, index) => (
        <Col lg={3} sm={6} className='box-col-3' key={index}>
          <div className='pricingtable'>
            <div className='pricingtable-header'>
              <h3 className='title'>{data.title}</h3>
            </div>
            <div className='price-value'>
              <span className='currency'>$</span>
              <span className='amount'>{data.amount}</span>
              <span className='duration'>/mo</span>
            </div>
            <ul className='pricing-content'>
              {data.content.map((item, index) => (
                <li key={index}>{item.detail}</li>
              ))}
            </ul>
            <div className='pricingtable-signup'>
              <Button color='primary' size='lg' href={Href}>
                {SignUp}
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default MemberPricing;
