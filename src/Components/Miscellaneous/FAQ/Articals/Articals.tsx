import { Card, CardBody, Col } from "reactstrap";
import { articlesData } from "@/Data/FAQ/FAQData";

const Articals = () => {
  return (
    <>
      {articlesData.map((item) => (
        <Col className={`${item.class} ${item.class2}`} key={item.id}>
          <Card className='bg-primary'>
            <CardBody>
              <div className='faq-widgets d-flex'>
                <div className='flex-grow-1'>
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </div>
                <i className={`icofont icofont-${item.icon}`}></i>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Articals;
