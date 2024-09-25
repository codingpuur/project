import Link from "next/link";
import { tourProfileData } from "@/Data/Apps/User/UsersProfileData";
import { List, ListInlineItem } from "reactstrap";

const SocialMedia = () => {
  return (
    <div className='social-media step4' data-intro='This is your social details'>
      <List type="inline" className='list-inline simple-list flex-row'>
        {tourProfileData.map((item, index) => (
          <ListInlineItem className='list-inline-item' key={index}>
            <Link href={item.link} target='_blank' rel='noreferrer'>
              <i className={item.icon} />
            </Link>
          </ListInlineItem>
        ))}
      </List>
    </div>
  );
};

export default SocialMedia;
