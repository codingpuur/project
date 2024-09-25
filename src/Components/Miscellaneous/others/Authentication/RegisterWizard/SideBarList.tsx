"use client";
import CommonLogo from '../Common/CommonLogo';
import { SideBarListPropsType } from '@/Types/MiscellaneousTypes';
import Link from 'next/link';
import Image from 'next/image';
import { ImagePath } from '@/Constant';
import { registerHorizontalData } from '@/Data/Others/AuthenticationData';

const SideBarList:React.FC<SideBarListPropsType> = ({ level }) => {
  return (
    <ul className="anchor">
      <li><CommonLogo /></li>
      {registerHorizontalData.map((data, index) => (
        <li key={index}>
          <Link href={`#form-${index}`} className={`${level === index + 1? "selected": level > index + 1? "done": "disabled"}`} >
            <h4>{index + 1}</h4>
            <h5>
              {data.tittle}
              {data.tittle === "Done" ? (<i className="fa fa-thumbs-o-up" />) : (" ")}
            </h5>
            <small>{data.detail}</small>
          </Link>
        </li>
      ))}
      <li>
        <Image src={`${ImagePath}/login/icon.png`} alt="looginpage" height={392} width={521}/>
      </li>
    </ul>
  )
}

export default SideBarList