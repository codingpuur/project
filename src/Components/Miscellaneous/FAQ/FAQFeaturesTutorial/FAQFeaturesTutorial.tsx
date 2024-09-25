import { Col, Row } from "reactstrap";
import { FeaturedTutorials } from "@/utils/Constant";
import FeaturesTutorial from "./FeaturesTutorial";

const FAQFeaturesTutorial = () => {
  return (
    <Col lg={12} className='featured-tutorial'>
      <div className='header-faq'>
        <h3 className='mb-0'>{FeaturedTutorials}</h3>
      </div>
      <Row>
        <FeaturesTutorial />
      </Row>
    </Col>
  );
};

export default FAQFeaturesTutorial;
