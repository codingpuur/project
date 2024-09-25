import { ImagePath } from "@/Constant";
import Image from "next/image";

const RecentImage = () => {
  const Imgs = ["dashboard-2/product/1.png", "dashboard-2/product/2.png", "dashboard-2/product/1.png"];
  return (
    <div className='recent-images mb-2'>
      <ul className='flex-row'>
        {Imgs &&
          Imgs.map((item, index) => (
            <li key={index}>
              <div className='recent-img-wrap'>
                <Image src={`${ImagePath}/${item}`} alt='chair' width={32} height={32} />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecentImage;
