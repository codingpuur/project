import { CardBody, Collapse } from "reactstrap";
import { mutualFriendData } from "@/Data/Apps/SocialApp/SocialAppData";
import { FilterPropsType } from "@/Types/Apps/SocialApp";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const MutualFriendsCollapase: React.FC<FilterPropsType> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className='social-status filter-cards-view'>
        {mutualFriendData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image width={50} height={50} className='img-50 rounded-circle m-r-15' src={`${ImagePath}/user/${data.imageName}`} alt='user' />
            <div className={`social-status ${data.socialClass}`} />
            <div className='flex-grow-1'>
              <span className='f-w-600 d-block'>{data.title}</span>
              <span className='d-block'>{data.email}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default MutualFriendsCollapase;
