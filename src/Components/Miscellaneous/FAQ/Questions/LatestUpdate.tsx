import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Href, LatestUpdates, SeeAll } from "@/utils/Constant";
import { latestData } from "@/Data/FAQ/FAQData";
import Link from "next/link";

const LatestUpdate = () => {
  return (
    <Col lg={12}>
      <Card>
        <CardHeader className='faq-header'>
          <h3 className='d-inline-block m-0'>{LatestUpdates}</h3>
          <span className='pull-right d-inline-block'>{SeeAll}</span>
        </CardHeader>
        <CardBody className='faq-body'>
          {latestData.map((item, i) => (
            <div className='d-flex updates-faq-main' key={i}>
              <div className='updates-faq'>{item.iconClass}</div>
              <div className='flex-grow-1 updates-bottom-time'>
                <p>
                  {item.name} <Link href={Href}>{item.val}</Link> {item.title}
                </p>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestUpdate;
