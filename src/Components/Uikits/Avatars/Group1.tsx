import { ImagePath } from "@/Constant";
import Image from "next/image";

const Group1 = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image
            className="img-100 b-r-8"
            src={`${ImagePath}/avtar/4.jpg`}
            alt="#"
            width={100}
            height={100}
          />
        </li>
        <li className="d-inline-block">
          <Image
            className="img-80 b-r-30"
            src={`${ImagePath}/avtar/16.jpg`}
            alt="#"
            width={80}
            height={80}
          />
        </li>
        <li className="d-inline-block">
          <Image
            className="img-50 b-r-35"
            src={`${ImagePath}/avtar/3.jpg`}
            alt="#"
            width={50}
            height={50}
          />
        </li>
      </ul>
    </div>
  );
};

export default Group1;
