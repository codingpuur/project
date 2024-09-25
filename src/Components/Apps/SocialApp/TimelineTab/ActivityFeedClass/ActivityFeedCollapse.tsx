import { CardBody, Collapse } from "reactstrap";
import { friendsData } from "@/Data/Apps/SocialApp/SocialAppData";
import { Href, Photo } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { FilterPropsType } from "@/Types/Apps/SocialApp";
import Link from "next/link";

const ActivityFeedCollapse: React.FC<FilterPropsType> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className='social-status filter-cards-view'>
        {friendsData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image width={50} height={50} className='img-50 rounded-circle m-r-15' src={`${ImagePath}/user/${data.imageName}`} alt='user' />
            <div className='flex-grow-1'>
              <span className='f-w-600 d-block'>{data.title}</span>
              <p>
                {"Commented on Shaun Park's "}
                <Link href={Href}>{Photo}</Link>
              </p>
              <span className='light-span'>
                {data.time} {"Ago"}
              </span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default ActivityFeedCollapse;
