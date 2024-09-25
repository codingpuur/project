import { CardBody, Collapse } from "reactstrap";
import MessagesAndNotification from "./MessagesAndNotification";
import LikesViewButton from "./LikesViewButton";
import { NewLikesThisWeek } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { FilterPropsType } from "@/Types/Apps/SocialApp";
import SocialGroup from "./SocialGroup";

const MyProfileClassCollapse: React.FC<FilterPropsType> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className='socialprofile filter-cards-view'>
        <div className='d-flex'>
          <Image width={50} height={50} className='img-50 img-fluid m-r-20 rounded-circle' src={`${ImagePath}/user/1.jpg`} alt='user' />
          <MessagesAndNotification />
        </div>
        <LikesViewButton />
        <div className='likes-profile text-center'>
          <h5>
            <span>
              <i className='fa fa-heart font-danger' /> 884
            </span>
          </h5>
        </div>
        <div className='text-center'>35 {NewLikesThisWeek}</div>
        <div className='customers text-center social-group'>
          <SocialGroup />
        </div>
        <Image className='img-fluid mt-5' alt='timeline-image' src={`${ImagePath}/social-app/timeline-3.png`} width={370} height={247} />
      </CardBody>
    </Collapse>
  );
};

export default MyProfileClassCollapse;
