import Link from "next/link";
import { Href } from "@/utils/Constant";

const UserProfileIcon = () => {
  return (
    <ul className='share-icons flex-row'>
      <li>
        <Link className='social-icon bg-primary' href={Href}>
          <i className='fa fa-smile-o me-0' />
        </Link>
      </li>
      <li>
        <Link className='social-icon bg-secondary' href={Href}>
          <i className='fa fa-wechat me-0' />
        </Link>
      </li>
      <li>
        <Link className='social-icon bg-warning' href={Href}>
          <i className='fa fa-share-alt me-0' />
        </Link>
      </li>
    </ul>
  );
};

export default UserProfileIcon;
