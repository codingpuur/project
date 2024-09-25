import Image from "next/image";
import { CallData } from "@/Data/Apps/Chat/ChatData";
import { ImagePath } from "@/Constant";

const PeopleList = () => {
  return (
    <div className='people-list'>
      <ul className='list digits custom-scrollbar'>
        {CallData.map((data, index) => (
          <li className='clearfix' key={index}>
            <Image className='rounded-circle user-image' src={`${ImagePath}/user/${data.img}`} alt='call-user' height={52} width={52}/>
            <div className='about'>
              <div className='name'>{data.name}</div>
              <div className='status'>
                <i className={`fa fa-${data.color === "success" ? "share" : "reply"} font-${data.color}`}></i>
                {data.date}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
