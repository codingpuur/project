import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Bestwebsiteideas, BothSideVisibleScrollbar, Latesttrends, Scroll1, Scroll3, ThebestUXdesigner, Scroll2 } from "@/utils/Constant";
import Image from "next/image";
import { BothSideScrollData } from "@/Data/BonusUi/scrollable/scrollableData";
import { ImagePath } from "@/Constant";

const BothSideScroll = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={BothSideVisibleScrollbar} subTitle={BothSideScrollData} headClass="pb-0" />
        <CardBody>
          <div className="scroll-bar-wrap">
            <ScrollBar className="visible-scroll always-visible scroll-demo" style={{ width: "100%", height: 300 }} >
              <div className="horz-scroll-content">
                <Row>
                  <Col sm={3}>
                    <div className="visible-wrapper">
                        <Image src={`${ImagePath}/banner/2.jpg`} alt="office-work" width={330} height={330} />
                    </div>
                    <p className="pt-3">
                      {Scroll1}
                    </p>
                  </Col>
                  <Col sm={3}>
                    <h6 className="pb-2">{Latesttrends}</h6>
                    <p>{"You should stay current with all the most recent advances in the business whether you operate as a freelance web designer or for an agency or design studio. You may be sure you're constantly providing the most intelligent and original design solutions by doing this."}</p>
                    <p>{"You can keep up with evolving design trends by reading web design blogs. You'll need to be able to comprehend new trends' causes and how they affect user experience. Additionally, you'll discover upgrades to current tools as well as new ones that have recently hit the market."}</p>
                    <div className="visible-wrapper">
                      <Image src={`${ImagePath}/email/3.jpg`} alt="office" width={330} height={330} />
                    </div>
                  </Col>
                  <Col sm={3}>
                    <h6 className="pb-2">{ThebestUXdesigner}</h6>
                    <p>{"The internet is teeming with free resources, no matter what stage of your UX journey you're in, and UX design blogs should be your first point of call. The abundance of blogs available, though, can be somewhat of a double-edged sword because there are so many to choose from. How do you decide which blogs are actually worthwhile reading?"}</p>
                    <p>{"We've collected a selection of the top UX design blogs available right now to spare you hours of scrolling and sorting through search results. We possess:"}<br />{Scroll3}</p>
                    <p>{"If you already work in the UX field, the Inside Design blog has all the information you need to expand your knowledge, especially if you're interested in streamlining your UX teams and procedures and getting a better understanding of the whole product design and development process. This is an excellent location to keep an eye out for the most recent UX trends, tools, resources, and events because they are always adding new stuff."}</p>
                  </Col>
                  <Col sm={3}>
                    <h6 className="pb-2">{Bestwebsiteideas}</h6>
                    <div className="visible-wrapper">
                      <Image src={`${ImagePath}/banner/3.jpg`} alt="website" width={330} height={330} />
                    </div>
                    <p className="pt-3">{Scroll2}</p>
                  </Col>
                </Row>
              </div>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BothSideScroll;
