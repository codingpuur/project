import { Button } from "reactstrap";
import { Href, Mamber } from "@/utils/Constant";
import {topCustomerData} from "@/Data/Dashboard/CRM/TopCustomer"
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const TopCustomerBody = () => {
  return (
    <>
      {topCustomerData.map((data,index)=>(
        <div className={`d-flex align-items-center ${data.className}`} key={index}>
          <Image src={`${ImagePath}/dashboard-2/user/${data.img}.jpg`} alt="" height={50} width={50}/>
          <div className="flex-grow-1 ms-2">
            <Link href={Href}>
              <h5>{data.name}</h5>
              <span>{data.id}</span>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Button className={`bg-light-${data.color} txt-${data.color}`} color="transparent">
              {data.status} 
              <span>{Mamber}</span>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCustomerBody;
