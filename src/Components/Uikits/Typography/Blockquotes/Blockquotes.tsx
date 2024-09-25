import { Card, CardBody, Col } from "reactstrap";
import { Blockquotes } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { BlockData, blockQuotesData } from "@/Data/Uikits/Typography/TypographyData";

const Blockquote = () => {
  return (
    <Col sm={12}>
      <Card className="overflow-hidden">
        <CommonHeader title={Blockquotes} subTitle={BlockData} headClass='pb-0'/>
        <CardBody>
          <div className='figure d-block dark-blockquote'>
            <blockquote className="blockquote light-card mb-2">
              <p className="mb-0 txt-dark">{'The only impossible journey is the one you never begin.'}</p>
              <figcaption className="blockquote-footer pt-3">
                {'Tony Robbins'}
              </figcaption>
            </blockquote>
          </div>
          {blockQuotesData &&
            blockQuotesData.map((item, index) => (
              <div key={index} className={item.class}>
                <blockquote className="blockquote light-card mb-2">
                  <p className="mb-0 txt-dark">{item.text}</p>
                  <figcaption className="blockquote-footer pt-3">
                    {item.footer}
                  </figcaption>
                </blockquote>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Blockquote;
