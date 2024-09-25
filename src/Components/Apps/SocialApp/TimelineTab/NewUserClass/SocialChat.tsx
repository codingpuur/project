import { ImagePath } from "@/Constant";
import { TimelineDataType } from "@/Types/Apps/SocialApp";
import { Href, MoreComments } from "@/utils/Constant";
import Image from "next/image";
import Link from "next/link";

const SocialChat: React.FC<TimelineDataType> = ({ data }) => {
  return (
    <div className='social-chat'>
      {data.socialChatData.map((item, index) => (
        <div className={item.class} key={index}>
          <div className='d-flex'>
            <Image className='img-50 m-r-20 rounded-circle image-fluid' alt='' src={`${ImagePath}/user/${item.img}`} width={50} height={50} />
            <div className='flex-grow-1'>
              <span className='f-w-600'>
                {item.name}
                <span>
                  {item.time}
                  <i className='fa fa-reply font-primary'></i>
                </span>
              </span>
              <p>{item.chat}</p>
            </div>
          </div>
        </div>
      ))}
      <div className='text-center'>
        <Link href={Href}>{MoreComments}</Link>
      </div>
    </div>
  );
};

export default SocialChat;
