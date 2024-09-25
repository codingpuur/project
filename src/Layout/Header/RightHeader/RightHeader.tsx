import Bookmark from "../Bookmark/Bookmark";
import Cart from "../Cart/Cart";
import DarkMode from "../DarkMode/DarkMode";
import Language from "../Language/Language";
import Message from "../Message/Message";
import Notifications from "../Notifications/Notifications";
import SearchInput from "../SearchInput/SearchInput";
import UserProfile from "../UserProfile/UserProfile";

const RightHeader = () => {
  return (
    <div className='nav-right col-auto pull-right right-header p-0 ms-auto'>
      <ul className='nav-menus'>
        <SearchInput />
        <Notifications />
        <Bookmark />
        <Message />
        <Cart />
        <DarkMode />
        <Language />
        <UserProfile />
      </ul>
    </div>
  );
};

export default RightHeader;
