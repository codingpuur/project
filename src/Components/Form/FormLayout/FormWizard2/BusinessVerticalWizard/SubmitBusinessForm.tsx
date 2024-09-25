import { ImagePath } from "@/Constant";
import { SuccessfullyCompleted } from "@/utils/Constant";
import Image from "next/image";

const SubmitBusinessForm = () => {
  return (
    <div className='form-completed'>
      <Image width={100} height={100} src={`${ImagePath}/gif/dashboard-8/successful.gif`} alt='successful' />
      <h3>{SuccessfullyCompleted} </h3>
    </div>
  );
};

export default SubmitBusinessForm;
