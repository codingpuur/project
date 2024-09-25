import { ImagePath } from "@/Constant";
import { emailList } from "@/Data/Apps/Email/EmailData";
import { CallbackProp } from "@/Types/Apps/EmailTypes";
import { Href } from "@/utils/Constant";
import Image from "next/image";
import { useState } from "react";
import { NavLink } from "reactstrap";

const ReadEmailList: React.FC<CallbackProp> = ({ activeCallback }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleEmails = (index: number) => {
    setActiveTab(index + 1);
    activeCallback(index + 1);
  };
  return (
    <div className='inbox custom-scrollbar'>
      {emailList.map((data, index) => (
          <NavLink className={`p-0 ${activeTab === index ? "active" : ""}`} href={Href} onClick={() => handleEmails(index)}>
            <div className='d-flex' key={index}>
              <div className='media-size-email'>
                <Image className='me-3 rounded-circle' src={`${ImagePath}/user/user.png`} alt='image' height={48} width={48} />
              </div>
              <div className='flex-grow-1'>
                <h3>
                  {data.tittle}
                  <small>
                    <span className='digits email-badge'>({data.date}</span> {data.month}
                    <span className='digits email-badge'>{data.year})</span>
                  </small>
                </h3>
                <p>{data.paragraph}</p>
              </div>
            </div>
          </NavLink>
      ))}
    </div>
  );
};

export default ReadEmailList;
