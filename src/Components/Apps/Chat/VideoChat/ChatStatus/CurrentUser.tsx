import { ImagePath } from "@/Constant"
import Image from "next/image"

const CurrentUser = () => {
  return (
    <div className="d-flex">
      <Image
        className="rounded-circle user-image"
        src={`${ImagePath}/user/12.png`}
        alt="user"
        height={52}
        width={52}
      />
      <div className="about">
        <div className="name f-w-600">{'Mark Jecno'}</div>
        <div className="status">{'Status...'}</div>
      </div>
    </div>
  )
}

export default CurrentUser