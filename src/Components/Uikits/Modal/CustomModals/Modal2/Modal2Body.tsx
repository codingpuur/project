import { CionLogin } from "@/utils/Constant";
import StaticModalForm from "./StaticModalForm";
import { TogglePropsType } from "@/Types/ModelTypes";


const Modal2Body:React.FC<TogglePropsType> = ({ toggle }) => {
  return (
    <div className='modal-toggle-wrapper'>
      <h3>{CionLogin}</h3>
      <p>{"Fill in your information below to continue."}</p>
      <StaticModalForm toggle={toggle} />
    </div>
  );
};

export default Modal2Body;
