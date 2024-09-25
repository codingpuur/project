import { ImagePath } from "@/Constant";
import { TimelineDataType } from "@/Types/Apps/SocialApp";
import Image from "next/image";
import { MoreVertical } from "react-feather";

const NewUsersSocial: React.FC<TimelineDataType> = ({ data }) => {
  return (
    <div className='new-users-social'>
      <div className='d-flex'>
        <Image width={58} height={58} className='rounded-circle image-radius m-r-15' src={`${ImagePath}/user/1.jpg`} alt='user121' />
        <div className='flex-grow-1'>
          <h3 className='mb-0 f-w-700'>{data.name}</h3>
          <p>{data.date}</p>
        </div>
        <span className='pull-right mt-0'>
          <MoreVertical />
        </span>
      </div>
    </div>
  );
};

export default NewUsersSocial;
