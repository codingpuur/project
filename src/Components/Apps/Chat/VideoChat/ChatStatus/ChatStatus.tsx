import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import CurrentUser from "./CurrentUser";
import SearchChatList from "./SearchChatList";
import { ChatProp } from "@/Types/Apps/ChatTypes";
import { changeChat, createNewChatAsync } from "@/Redux/Reducer/ChatSlice";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ChatStatus = () => {
  const { members, currentUser, selectedUser, chats } = useAppSelector((state) => state.chatData);
  const dispatch = useAppDispatch();
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  
  const changeChatClick = (selectedUserId: number) => {
    const currentUserId = currentUser.id;
    const currentChat = chats.find((x: ChatProp) => x.users.includes(currentUser.id) && x.users.includes(selectedUserId));
    if (currentChat) dispatch(changeChat(selectedUserId));
    dispatch(createNewChatAsync({ currentUserId, selectedUserId, chats }));
  };

  return (
    <div className="chat-box">
      <div className="chat-left-aside">
        <CurrentUser />
        <div className="people-list">
          <SearchChatList />
          {members && members.length > 0 ? (
            <ul className="custom-scrollbar">
              {members
                .filter((x: any) => x.id !== currentUser.id)
                .map((item: any, id: number) => (
                  <li key={id} className={`clearfix ${activeChat === item.id ? "active" : ""}`} onClick={() => changeChatClick(item.id)}>
                    <div className="d-flex">
                      <Image src={`${ImagePath}/${item.thumb}`} className="rounded-circle user-image" alt={"user"} height={52} width={52}/>
                      <div className={`status-circle ${item.online === true ? "online" : "offline"}`}></div>
                      <div className="about flex-grow-1">
                        <div className="name">{item.name}</div>
                        <div className="status">{item.status}</div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <Image className="img-fluid m-auto" src={`${ImagePath}/search-not-found.png`} alt="search-not-found" width={200} height={137} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatStatus;
