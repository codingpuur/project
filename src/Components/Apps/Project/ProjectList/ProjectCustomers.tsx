import { ImagePath } from "@/Constant";
import { CommonProjectInterFace } from "@/Types/Apps/ProjectListTypes";
import Image from "next/image";

const ProjectCustomers:React.FC<CommonProjectInterFace> = ({ item }) => {
  return (
    <div className='customers'>
      <ul>
        <li className='d-inline-block border-0'>
          <Image width={30} height={30} className='img-30 rounded-circle' src={`${ImagePath}/${item.customers_img1}`} alt='' />
        </li>
        <li className='d-inline-block border-0'>
          <Image width={30} height={30} className='img-30 rounded-circle' src={`${ImagePath}/${item.customers_img2}`} alt='' />
        </li>
        <li className='d-inline-block border-0'>
          <Image width={30} height={30} className='img-30 rounded-circle' src={`${ImagePath}/${item.customers_img3}`} alt='' />
        </li>
        <li className='d-inline-block border-0 ms-2'>
          <p className='f-12'>{`+${item.like} More`}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCustomers;
