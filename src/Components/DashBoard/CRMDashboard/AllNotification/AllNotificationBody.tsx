import { Accpet, Decline, Href } from "@/utils/Constant";
import { allNotificationData } from "@/Data/Dashboard/CRM/AllNotification";
import { Button } from "reactstrap";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const AllNotificationBody = () => {
  return (
    <>
      {allNotificationData.map((data, index) => (
        <div className={`d-flex align-items-center ${index === 0 ? "pt-0" : ""}`} key={index}>
          <Image src={`${ImagePath}/dashboard-2/user/${data.img}.jpg`} alt='' height={45} width={45}/>
          <div className='flex-grow-1 ms-2'>
            <Link href={Href}>
              <h5>{data.comment}</h5>
              {data.btn && (
                <>
                  <Button color='primary' className='mt-1 mb-1 me-2'>
                    {Accpet}
                  </Button>
                  <Button color='secondary' className='mt-1 mb-1'>
                    {Decline}
                  </Button>
                </>
              )}
              {index !== 2 ? <span>{data.status}</span> : ""}
            </Link>
            {index === 2 ? <span>{data.status}</span> : ""}
          </div>
          <div className='flex-shrink-0'>{data.icon && <i className='fa fa-circle circle-dot-primary pull-right'></i>}</div>
        </div>
      ))}
    </>
  );
};

export default AllNotificationBody;
