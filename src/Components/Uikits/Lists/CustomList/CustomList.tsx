import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Customcontentlists } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { CustomListTopData, custonListData } from "@/Data/Uikits/Lists/ListsData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const CustomList = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={Customcontentlists} subTitle={CustomListTopData} headClass='pb-0' />
        <CardBody>
          <ListGroup className='main-lists-content'>
            {custonListData &&
              custonListData.map((item, index) => (
                <ListGroupItem className={`list-group-item-action ${item.class}`} key={index}>
                  <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className='list-wrapper'>
                      <Image className='list-img' src={`${ImagePath}/${item.image}`} alt='profile' width={100} height={100} />
                      <div className='list-content'>
                        <h6>{item.head}</h6>
                        <p>{item.mail}</p>
                      </div>
                    </div>
                    <small>{item.span}</small>
                  </div>
                  <p className='mb-1'>{item.subtext}</p>
                  <small className={item.class === "active bg-primary" ? "text-white" : "text-muted"}>{item.follower}</small>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomList;
