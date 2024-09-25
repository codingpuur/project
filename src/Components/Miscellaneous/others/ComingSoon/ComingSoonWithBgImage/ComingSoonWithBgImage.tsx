"use client";
import { Container } from "reactstrap";
import CountdownData from "../Common/CountdownData";
import { WeAreComingSoon } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ComingSoonWithBgImage = () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
      <Container fluid className='p-0 m-0'>
        <div className='comingsoon comingsoon-bgimg'>
          <div className='comingsoon-inner text-center'>
            <Image src={`${ImagePath}/logo/logo-1.png`} alt='comingSoon' height={34} width={93}/>
            <h5>{WeAreComingSoon}</h5>
            <div className='countdown' id='clockdiv'>
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonWithBgImage;
