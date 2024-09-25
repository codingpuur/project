import { ImagePath } from "@/Constant";
import Image from "next/image";

const UserDetail = () => {
  return (
    <>
      <div className='d-flex align-items-center'>
        <div className='media-size-email'>
          <Image width={40} height={40} className='me-3 img-40 rounded-circle' src={`${ImagePath}/user/user.png`} alt='image' />
        </div>
        <div className='flex-grow-1'>
          <h3 className='f-w-600'>{"Mark Jecno"}</h3>
          <p>{"Markjecno@gmail.com"}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
