import { BluetoothHandphone} from "@/utils/Constant";
import SVG from "@/utils/CommonSvgIcon/SVG";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const TopSellingProductBody = () => {
  return (
    <ul className="selling-box bg-light-primary">
      <li>
        <div className="d-flex">
          <div className="flex-shrink-0">
            <Image src={`${ImagePath}/dashboard/04.png`} alt="" height={60} width={46}/>
          </div>
          <div className="flex-grow-1">
            <h4>{BluetoothHandphone}</h4>
            <p>{"Welltech SH 12 Bluetooth Headphone Bluetooth"}</p>
            <div className="d-flex align-items-center gap-0">
              <h4>4.5</h4>
              <p className="pull-right ms-2">
                <i className="fa fa-star font-secondary"></i>
              </p>
            </div>
          </div>
          <span>
            <SVG iconId="fill-Buy" />
          </span>
        </div>
      </li>
    </ul>
  );
};

export default TopSellingProductBody;
