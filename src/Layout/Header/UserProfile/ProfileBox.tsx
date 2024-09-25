import Link from "next/link";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { profilesMessage } from "@/Data/Layout/Header/ProfilesData";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProfileBox = () => {
  const router = useRouter();
  const handleClick = (name:string)=>{
    if(name === "Log Out"){
      Cookies.remove('cion_token');
      router.push('/auth/login');
    }
  }
  return (
    <ul className="profile-dropdown onhover-show-div">
      {profilesMessage.map((data,index) => (
        <li key={index}>
          <Link href={data.link} onClick={()=>handleClick(data.name)}>
            <FeatherIcons iconName={data.icon} />
            <span>{data.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileBox;
