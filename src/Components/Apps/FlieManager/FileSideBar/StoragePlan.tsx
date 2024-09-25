import { Progress } from "reactstrap";
import { FaDatabase } from "react-icons/fa";
import { Storage } from "@/utils/Constant";

const StoragePlan = () => {
  return (
    <ul>
      <li>
        <div className='btn-outline-primary btn'>
          <FaDatabase />
          {Storage}
        </div>
        <div className='m-t-15'>
          <Progress color='primary' style={{ height: "5px" }} value={55} className='sm-progress-bar mb-1' />
          <p>{"25 GB of 100 GB used"}</p>
        </div>
      </li>
    </ul>
  );
};

export default StoragePlan;
