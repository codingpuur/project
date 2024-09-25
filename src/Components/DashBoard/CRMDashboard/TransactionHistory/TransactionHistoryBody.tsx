import Image from "next/image";
import { transactionHistoryBodyData } from "@/Data/Dashboard/CRM/TransactionHistory";
import { Href } from "@/utils/Constant";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const TransactionHistoryBody = () => {
  return (
    <>
      {transactionHistoryBodyData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className='d-flex align-items-center'>
              <Image src={`${ImagePath}/dashboard/user/${data.img}.jpg`} alt='' height={40} width={40}/>
              <div className='flex-grow-1 ms-2'>
                <Link href={Href}>
                  <h5>{data.name}</h5>
                  <span>{data.pending}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <p>{data.date}</p>
          </td>
          <td>
            <h5>{data.amount}</h5>
          </td>
          <td>
            <p>{data.invoice}</p>
          </td>
          <td>
            <p className={`font-${data.color}`}>{data.status}</p>
          </td>
          <td>
            <p>{data.payment}</p>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TransactionHistoryBody;
