import { ImagePath } from "@/Constant";
import Image from "next/image";

const Group3 = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image
            className="img-40 rounded-circle"
            src={`${ImagePath}/user/3.jpg`}
            alt="#"
            width={40}
            height={40}
          />
        </li>
        <li className="d-inline-block">
          <Image
            className="img-40 rounded-circle"
            src={`${ImagePath}/user/5.jpg`}
            alt="#"
            width={40}
            height={40}
          />
        </li>
        <li className="d-inline-block">
          <Image
            className="img-40 rounded-circle"
            src={`${ImagePath}/user/1.jpg`}
            alt="#"
            width={40}
            height={40}
          />
        </li>
      </ul>
    </div>
  );
};

export default Group3;
