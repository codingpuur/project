import { Href } from "@/utils/Constant";
import { Button } from "reactstrap";
import { dealOpenData } from "@/Data/Dashboard/CRM/DealOpen";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const DealOpenBody = () => {
  return (
    <ul className="theme-scrollbar">
      {dealOpenData.map((data,index) => (
        <li className="d-flex align-items-center" key={index}>
          <Image src={`${ImagePath}/dashboard-2/user/${data.img}.jpg`} alt="" height={45} width={45}/>
          <Link className="ms-2" href={Href}>
            <h5>{data.title}</h5>
            <span>{data.subTitle}</span>
          </Link>
          <div className="flex-grow-1 ms-2">
            <h5>{data.duration}</h5>
            <span>{data.date}</span>
          </div>
          <div className="flex-shrink-0 ms-2">
            <h5>{data.amount}</h5>
            <Button color="transperant" className="bg-light-primary txt-primary">
              {data.btn}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DealOpenBody;
