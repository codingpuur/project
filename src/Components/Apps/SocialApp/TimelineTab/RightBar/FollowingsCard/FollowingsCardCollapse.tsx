import { CardBody, Collapse } from "reactstrap";
import { AddFriend, Href } from "@/utils/Constant";
import { followingsData } from "@/Data/Apps/SocialApp/SocialAppData";
import { FilterPropsType } from "@/Types/Apps/SocialApp";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const FollowingsCardCollapse: React.FC<FilterPropsType> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className='social-list filter-cards-view'>
        {followingsData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image width={50} height={50} className='img-50 img-fluid m-r-20 rounded-circle' alt='image' src={`${ImagePath}/user/${data.imageName}`} />
            <div className='flex-grow-1'>
              <span className='d-block'>{data.name}</span>
              <Link href={Href}>{AddFriend}</Link>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default FollowingsCardCollapse;
