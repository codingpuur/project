import { ImagePath } from "@/Constant";
import SVG from "@/utils/CommonSvgIcon/SVG";
import Image from "next/image";

const BgImage = () => {
  return (
    <div className='social-img-wrap custom-modal-profile'>
      <div className='social-img'>
        <Image src={`${ImagePath}/dashboard-2/user/profile.png`} alt='profile' width={68} height={68} />
      </div>
      <div className='edit-icon'>
        <SVG iconId='profile-check' />
      </div>
    </div>
  );
};

export default BgImage;
