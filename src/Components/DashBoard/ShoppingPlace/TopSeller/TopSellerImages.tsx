import { ImagePath } from "@/Constant";
import Image from "next/image";

const TopSellerImages = () => {
  const imagesData = ["9", "10", "11", "8"];
  return (
    <ul>
      {imagesData.map((data,index) => (
        <li className="d-inline-block" key={index}>
          <Image
            className="img-30 rounded-circle"
            src={`${ImagePath}/dashboard/user/0${data}.jpg`}
            alt="user"
            height={30} width={30}
          />
        </li>
      ))}
      <li className="d-inline-block">
        <div className="light-card">
          <span className="f-w-500">+5</span>
        </div>
      </li>
    </ul>
  );
};

export default TopSellerImages;
