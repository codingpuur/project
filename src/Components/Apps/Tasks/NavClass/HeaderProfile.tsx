import { ImagePath } from "@/Constant";
import Image from "next/image";

const HeaderProfile = () => {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <Image
          className="me-3 rounded-circle"
          src={`${ImagePath}/user/user.png`}
          alt="user"
          width={48}
          height={48}
        />
      </div>
      <div className="flex-grow-1">
        <h3 className="f-w-600">{'MARK JENCO'}</h3>
        <p>{'Markjecno@gmail.com'}</p>
      </div>
    </div>
  );
};

export default HeaderProfile;
