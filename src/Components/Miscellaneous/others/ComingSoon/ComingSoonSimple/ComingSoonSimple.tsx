"use client";
import { Container } from "reactstrap";
import CountdownData from "../Common/CountdownData";
import Image from "next/image";
import { WeAreComingSoon } from "@/utils/Constant";
import { ImagePath } from "@/Constant";

const ComingSoonSimple = () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
      <Container fluid className='p-0'>
        <div className='comingsoon'>
          <div className='comingsoon-inner text-center'>
            <Image src={`${ImagePath}/logo/logo-1.png`} alt='coming soon' width={93} height={34}/>
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

export default ComingSoonSimple;
