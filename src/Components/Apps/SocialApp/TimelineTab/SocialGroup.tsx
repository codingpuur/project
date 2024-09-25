import { UncontrolledTooltip } from "reactstrap";
import { socialGroupData } from "@/Data/Apps/SocialApp/SocialAppData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const SocialGroup = () => {
  return (
    <ul className='justify-content-center flex-row'>
      {socialGroupData.map((data, index) => (
        <li className='d-inline-block' key={index}>
          <Image width={30} height={30} className='img-30 rounded-circle' src={`${ImagePath}/user/${data.imageName}`} alt='Img' id={`UncontrolledTooltipExample-${index}`} />
          <UncontrolledTooltip placement='top' target={`UncontrolledTooltipExample-${index}`}>
            {data.userName}
          </UncontrolledTooltip>
        </li>
      ))}
    </ul>
  );
};

export default SocialGroup;
