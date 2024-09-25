import { Container } from 'reactstrap'
import CountdownData from '../Common/CountdownData'
import { ImagePath } from '@/Constant'
import Image from 'next/image'
import { WeAreComingSoon } from '@/utils/Constant'

const ComingWithBgVideo = () => {
  return (
    <Container fluid className="p-0">
      <div className="comingsoon auth-bg-video">
        <video
          className="bgvideo-comingsoon"
          id="bgvid"
          poster={`${ImagePath}/other-images/coming-soon-bg.jpg`}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={"../../assets/video/auth-bg.mp4"} type="video/mp4" />
        </video>
        <div className="comingsoon-inner text-center">
          <Image src={`${ImagePath}/logo/logo-1.png`} alt="comingSoon" width={93} height={34}/>
          <h5>{WeAreComingSoon}</h5>
          <div className="countdown" id="clockdiv">
            <CountdownData />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ComingWithBgVideo
