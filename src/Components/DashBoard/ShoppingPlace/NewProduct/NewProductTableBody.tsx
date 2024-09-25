import { ImagePath } from "@/Constant";
import { tableBody } from "@/Data/Dashboard/ShoppingPlace/NewProductTable";
import { Href } from "@/utils/Constant";
import Image from "next/image";
import Link from "next/link";

const NewProductTableBody = () => {
  return (
    <>
      {tableBody.map((data,index) => (
        <tr key={index}>
          <td>
            <div className="d-flex">
              <Image src={`${ImagePath}/dashboard/${data.img}.jpg`} alt="" height={40} width={40}/>
              <div className="flex-grow-1 ms-2">
                <Link href={Href}>
                  <span>{data.name}</span>
                  <h5>{data.number}</h5>
                </Link>
              </div>
              <div className="active-status active-online"></div>
            </div>
          </td>
          <td>
            <span>{data.coupon}</span>
            <h5>{data.code}</h5>
          </td>
          <td>
            <span>{data.percentage}</span>
            <h5>{data.amount}</h5>
          </td>
        </tr>
      ))}
    </>
  );
};

export default NewProductTableBody;
