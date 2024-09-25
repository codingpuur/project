import { ImagePath } from "@/Constant";
import Image from "next/image";

const Group2 = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image
            className="img-60 rounded-circle"
            src={`${ImagePath}/avtar/16.jpg`}
            alt="#"
            width={60}
            height={60}
          />
        </li>
        <li className="d-inline-block">
          <Image className="b-r-8 img-80" src={`${ImagePath}/user/1.jpg`} alt="#" height={80} width={80} />
        </li>
        <li className="d-inline-block">
          <Image
            className="img-60 rounded-circle"
            src={`${ImagePath}/user/1.jpg`}
            alt="#"
            width={60}
            height={60}
          />
        </li>
      </ul>
    </div>
  );
};

export default Group2;
