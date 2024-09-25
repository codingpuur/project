import { organizationList } from "@/Data/Apps/Contact/ContactData";
import { TabPane } from "reactstrap";
import { Emailaddress, Gender, General, Href, Personal, Print } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const TabOrg = () => {
  return (
    <>
      {organizationList.map((item, i) => (
        <TabPane tabId={item.activeTab} key={i}>
          <div className='profile-mail'>
            <div className='d-flex'>
              <Image className='p-0 img-100 img-fluid m-r-20 rounded-circle update_img_5' src={`${ImagePath}/${item.img}`} alt='images' width={100} height={100}/>
              <div className='flex-grow-1'>
                <h3>
                  <span className='first_name_5'>{item.name}</span>
                </h3>
                <p className='email_add_5'>{item.email}</p>
                <ul>
                  <li>
                    <Link href={Href}>{Print}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='email-general'>
              <h3>{General}</h3>
              <p>
                {Emailaddress}: <span className='font-primary email_add_5'>{item.email}</span>
              </p>
              <div className='gender'>
                <h3>{Personal}</h3>
                <p>
                  {Gender}: <span>{item.gender}</span>
                </p>
              </div>
            </div>
          </div>
        </TabPane>
      ))}
    </>
  );
};

export default TabOrg;
