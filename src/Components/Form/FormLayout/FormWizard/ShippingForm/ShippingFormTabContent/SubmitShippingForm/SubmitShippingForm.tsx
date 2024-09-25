import Image from 'next/image'
import { Href, OrderID } from '@/utils/Constant'
import { ImagePath } from '@/Constant'
import Link from 'next/link'

const SubmitShippingForm = () => {
  return (
    <>
      <div className="order-confirm">
        <Image
          width={126.5}
          height={126.5}
          src={`${ImagePath}/gif/dashboard-8/successful.gif`}
          alt="popper"
        />
        <p className="mb-0">{"An email with your orders specifics will be sent to you as order confirmation."}</p>
        <p className="text-center f-w-500 mt-2">
          {OrderID}:
          <Link className="text-decoration-underline" href={Href}>
            GE34598
          </Link>
        </p>
      </div>
    </>
  )
}

export default SubmitShippingForm