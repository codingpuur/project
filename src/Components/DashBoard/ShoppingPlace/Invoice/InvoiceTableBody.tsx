import Link from "next/link";
import { invoiceBody } from "@/Data/Dashboard/ShoppingPlace/InvoiceTable";
import { Href } from "@/utils/Constant";
import { Button } from "reactstrap";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const InvoiceTableBody = () => {
  return (
    <>
      {invoiceBody.map((data, index) => (
        <tr key={index}>
          <td>
            <div className='d-flex align-items-center'>
              <Image src={`${ImagePath}/dashboard/user/${data.img}.jpg`} alt='' height={40} width={40}/>
              <div className='flex-grow-1 ms-2'>
                <Link href={Href}>
                  <h5>{data.client}</h5>
                  <span>{data.id}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <p>{data.date}</p>
          </td>
          <td>
            <h5>{data.due}</h5>
          </td>
          <td>
            <p>{data.amount}</p>
          </td>
          <td>
            <p>{data.sent}</p>
          </td>
          <td>
            <Button color='transperant'>{data.status}</Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default InvoiceTableBody;
