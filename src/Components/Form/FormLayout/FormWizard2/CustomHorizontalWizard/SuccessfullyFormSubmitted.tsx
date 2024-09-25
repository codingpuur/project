import Image from "next/image";
import { SuccessfullyCompleted } from "@/utils/Constant";
import { ImagePath } from "@/Constant";

const SuccessfullyFormSubmitted = () => {
  return (
    <div className='form-completed'>
      <Image width={100} height={100} src={`${ImagePath}/gif/dashboard-8/successful.gif`} alt='successful' />
      <h3>{SuccessfullyCompleted}</h3>
    </div>
  );
};

export default SuccessfullyFormSubmitted;
