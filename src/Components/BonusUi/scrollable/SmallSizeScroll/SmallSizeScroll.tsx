import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SmallScrollText, SmallSizeScrollbar } from "@/utils/Constant";
import Scrollbars from "react-custom-scrollbars-2";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { SmallSizeScrollData } from "@/Data/BonusUi/scrollable/scrollableData";

const SmallSizeScroll = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={SmallSizeScrollbar} subTitle={SmallSizeScrollData} headClass='pb-0' />
        <CardBody>
          <div className='scroll-bar-wrap'>
            <Scrollbars className='scrollbar-margins large-margin scroll-demo pt-2 ps-2 pe-0' style={{ width: "100%", height: 300 }}>
              <div className='margin-scrollbar'>
                <h3 className='pb-2'>{SmallScrollText}</h3>
              </div>
              <p>
                The Business Transformation Solution programme is a <em className='txt-danger'>multi-level engagement program</em> is designed to help Small and Medium-Sized Businesses and Startups create a strong, well-functioning business organization that produces the best results quickly and effectively.
                <Image className='img-fluid pt-3' src={`${ImagePath}/banner/3.jpg`} alt='business' width={800} height={600} />
              </p>
              <p>
                The core of the programme is our internally developed <em className='txt-danger'>Business Management model</em> {', "Business Foundation & Management",'} which was tried and true for Indian business conditions while drawing inspiration from other successful global SME Business Management techniques.
              </p>
            </Scrollbars>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallSizeScroll;
