import { Button, Card, CardBody, Col } from "reactstrap";
import { AddFriend } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { peopleYouMayKnowData } from "@/Data/Apps/SocialApp/SocialAppData";
import { AboutPropsType } from "@/Types/Apps/SocialApp";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const PeopleYouMayKnow: React.FC<AboutPropsType> = ({ Heading }) => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Heading} />
        <CardBody className='avatar-showcase'>
          <div className='pepole-knows'>
            <ul className='flex-wrap flex-row'>
              {peopleYouMayKnowData.map((data, index) => (
                <li key={index}>
                  <div className='add-friend text-center'>
                    <Image width={60} height={60} className='img-60 img-fluid rounded-circle' alt='user' src={`${ImagePath}/${data.peopleImageName}`} />
                    <span className='d-block f-w-600'>{data.peopleName}</span>
                    <Button color='primary' size='xs'>
                      {AddFriend}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PeopleYouMayKnow;
