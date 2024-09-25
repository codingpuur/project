import { ImagePath } from '@/Constant';
import { useAppSelector } from '@/Redux/Hooks';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import IconsMenuList from '../VideoChat/VideoCallPage/IconsMenuList';

const ChatHeader = () => {
  const { selectedUser } = useAppSelector((state) => state.chatData);
  const location = usePathname();
  return (
    <div className="chat-header clearfix">
      <Image className="rounded-circle" src={`${ImagePath}/${selectedUser?.thumb ? selectedUser?.thumb : "user/1.jpg"}`}alt="user" height={52} width={52}/>
      <div className="about">
        <div className="name">
          {selectedUser ? selectedUser.name : "Vincent Porter"}
        </div>
        <div className="status digits">
          {selectedUser ? selectedUser.lastSeenDate : "5 May, 5:30 PM"}
        </div>
      </div>
      <IconsMenuList />
    </div>
  )
}

export default ChatHeader