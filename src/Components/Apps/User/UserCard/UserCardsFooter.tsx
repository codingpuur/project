import { CardType } from "@/Types/Apps/UserProfile";
import { Followers, Following, Posts } from "@/utils/Constant";

const UserCardsFooter: React.FC<CardType> = ({ item }) => {
  return (
    <ul className='social-follow flex-row'>
      <li>
        <h3 className='mb-0'>{item.follower}</h3>
        <span className='f-light'>{Posts}</span>
      </li>
      <li>
        <h3 className='mb-0'>{item.following}k</h3>
        <span className='f-light'>{Followers}</span>
      </li>
      <li>
        <h3 className='mb-0'>{item.totalPost}</h3>
        <span className='f-light'>{Following}</span>
      </li>
    </ul>
  );
};

export default UserCardsFooter;
