import { Button } from "reactstrap";
import { FiGrid } from "react-icons/fi";
import { FREE, PricingPlan, Selected, TrialVersion } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const PricingPlans = () => {
  return (
    <ul className='simple-list'>
      <li>
        <div className='btn btn-outline-primary'>
          <FiGrid />
          {PricingPlan}
        </div>
      </li>
      <li>
        <div className='pricing-plan'>
          <h6>{TrialVersion} </h6>
          <h5>{FREE}</h5>
          <p>{"100GB Space"}</p>
          <Button size='xs' color='transparent' className='btn-outline-primary '>
            {Selected}
          </Button>
          <Image width={182} height={182} className='bg-img' src={`${ImagePath}/dashboard/folder.png`} alt='' />
        </div>
      </li>
    </ul>
  );
};

export default PricingPlans;
