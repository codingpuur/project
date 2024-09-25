import { Button } from "reactstrap";
import { recentOrdersBody } from "@/Data/Dashboard/ShoppingPlace/RecentOrders";
import { Href } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const RecentOrdersTableBody = () => {
  return (
    <>
      {recentOrdersBody.map((data,index) => (
        <tr key={index}>
          <td>{data.id}</td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image
                  src={`${ImagePath}/dashboard/user/${data.img}.png`}
                  alt=""
                  height={40} width={40}
                />
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href={Href}>
                  <h4>{data.product}</h4>
                  <span>{data.delivery}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>{data.date}</td>
          <td>
            <Button color="transperant">{data.payment}</Button>
          </td>
          <td className={`txt-${data.color}`}>{data.status}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </>
  );
};

export default RecentOrdersTableBody;
