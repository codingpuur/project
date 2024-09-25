import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Cash_Back } from "@/utils/Constant";
import { Badge } from "reactstrap";

const CashBack = () => {
  return (
    <li>
      <div className='balance-item success'>
        <div className='balance-icon-wrap'>
          <div className='balance-icon'>
            <FeatherIcons iconName='ArrowUpRight' />
          </div>
        </div>
        <div>
          <span className='f-12 f-light'>{Cash_Back}</span>
          <h5>19.7K</h5>
          <Badge pill className='badge-light-success' color=''>
            +10.67%
          </Badge>
        </div>
      </div>
    </li>
  );
};

export default CashBack;
