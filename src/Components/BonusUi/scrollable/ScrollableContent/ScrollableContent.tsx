import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import Scrollbars from "react-custom-scrollbars-2";
import { ScrollableContents } from "@/utils/Constant";
import { ScrollableContentTopData, scrollableContentData } from "@/Data/BonusUi/scrollable/scrollableData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ScrollableContent = () => {
  return (
    <Col xxl={4} md={12}>
      <Card>
        <CommonHeader title={ScrollableContents} subTitle={ScrollableContentTopData} headClass='pb-0' />
        <CardBody>
          <Scrollbars className='vertical-scroll scroll-demo scroll-b-none' style={{ width: "100%", height: 300 }}>
            <ListGroup className='main-lists-content'>
              {scrollableContentData &&
                scrollableContentData.map((item, index) => (
                  <ListGroupItem className={`list-group-item-action list-hover-primary ${index === 0 && "active"}`} key={index}>
                    <div className='list-wrapper gap-0'>
                      <Image className='list-img' src={`${ImagePath}/${item.img}`} alt='profile' width={100} height={100} />
                      <div className='list-content'>
                        <h3>{item.head}</h3>
                        <p>{item.mail}</p>
                        {index === 0 ? <small>{item.small}</small> : <small className='text-muted'>{item.small}</small>}
                      </div>
                    </div>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableContent;
