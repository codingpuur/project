import { Card, CardBody, Col, Row } from "reactstrap";
import SocialGalleryImageDescription from "./SocialGalleryImageDescription";

const PhotosTab = () => {
  return (
    <Row>
      <Col sm={12}>
        <Card>
          <CardBody className='my-gallery row gallery-with-description'>
            <SocialGalleryImageDescription />
            </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PhotosTab;
