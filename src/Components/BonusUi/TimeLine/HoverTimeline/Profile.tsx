import Image from "next/image";
import { CarolynSutton, LillianGoodfellow } from "@/utils/Constant";
import { ImagePath } from "@/Constant";

const Profile = () => {
  return (
    <div className='designer-details'>
      <div className='designer-profile'>
        <div className='designer-wrap'>
          <Image className='designer-img' src={`${ImagePath}/avtar/4.jpg`} alt='profile' width={50} height={50} />
          <div className='designer-content'>
            <h3>{LillianGoodfellow}</h3>
            <p>{"239-664-7751s"}</p>
          </div>
        </div>
      </div>
      <div className='designer-profile'>
        <div className='designer-wrap'>
          <Image className='designer-img' src={`${ImagePath}/avtar/7.jpg`} alt='profile' width={50} height={50} />
          <div className='designer-content'>
            <h3>{CarolynSutton}</h3>
            <p>{"218-793-6609"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
