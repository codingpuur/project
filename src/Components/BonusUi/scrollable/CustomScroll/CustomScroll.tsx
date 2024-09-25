import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col } from "reactstrap";
import { CustomScrollbar } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { CustomScrollData } from "@/Data/BonusUi/scrollable/scrollableData";

const CustomScroll = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={CustomScrollbar} subTitle={CustomScrollData} headClass='pb-0' />
        <CardBody>
          <Scrollbars className='vertical-scroll scroll-demo' style={{ width: "100%", height: 300 }}>
            <h5 className='pb-2'>{CustomScrollbar}</h5>
            <p>
              I'm quite interested in learning more about <em className='txt-danger'>custom scrollbars</em> because they are becomingmore and more common.
            </p>
            <div className='scrollbar-images'>
              <Image className='img-fluid' src={`${ImagePath}/banner/1.jpg`} alt='banner' width={699} height={464} />
            </div>
            <p>{"There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause an app's user interface to look inconsistent across various operating systems. In this case, having a single style is helpful."}</p>
            <p>{"I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in doing so. I'll take the chance to learn more about them and share my trip in this essay."}</p>
            <p>
              One crucial point to remember is that, depending on the design, a scrollbar may operate either <em className='txt-danger'>horizontally or vertically</em> . Additionally, it might alter when you work on a website that is global and operates in both left-to-right and right-to-left orientations.
            </p>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomScroll;
