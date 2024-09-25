"use client";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { ActiveButtonsHeading, ActiveButtonsHeadingData, BoldBorderOutlineButtonsHeading, BoldBorderOutlineButtonsHeadingData, Buttons, DefaultButtonsHeading, DisabledButtonsHeading, DisabledButtonsHeadingData, DisabledOutlineButtonsHeading, DisabledOutlineButtonsHeadingData, ExtraSmallButtonsHeading, ExtraSmallButtonsHeadingData, GraddienButtonsHeadingData, GradientButtonsHeading, LargeButtonsHeading, LargeButtonsHeadingData, OutlineButtonsHeading, OutlineButtonsHeadingData, OutlineExtraSmallButtonsHeading, OutlineExtraSmallButtonsHeadingData, OutlineLargeButtonsHeading, OutlineLargeButtonsHeadingData, OutlineSmallButtonsHeading, OutlineSmallButtonsHeadingData, RaisedButton, SmallButtonsHeading, SmallButtonsHeadingData, defaultButtonsHeadingData } from "@/utils/Constant";
import CommonButtons from "../CommonButtons/CommonButtons";
import CustomStateButtons from "../DefaultStyle/CustomStateButtons";
import { activeButtonsData, boldBorderOutlineButtonsData, defaultButtonsData, disabledButtonsData, extraSmallButtonsData, gradientButtonsData, largeButtonsData, outlineButtonsData, outlineDisabledButtonsData, outlineExtraSmallButtonsData, outlineLargeButtonsData, outlineSmallButtonsData, smallButtonsData } from "@/Data/Buttons/DefaultStyle";

const RaisedButtons = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RaisedButton} parent={Buttons} title={RaisedButton} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <CommonButtons raised className='btn-pill' commonButtonsData={defaultButtonsData} title={DefaultButtonsHeading} subTitle={defaultButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={largeButtonsData} title={LargeButtonsHeading} subTitle={LargeButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={smallButtonsData} title={SmallButtonsHeading} subTitle={SmallButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={extraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={ExtraSmallButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={activeButtonsData} title={ActiveButtonsHeading} subTitle={ActiveButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={disabledButtonsData} title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} />
            <CustomStateButtons classData={"btn-pill"} />
            <CommonButtons raised className='btn-pill' commonButtonsData={outlineButtonsData} title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={boldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={outlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={OutlineLargeButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={outlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={OutlineSmallButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={outlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={OutlineExtraSmallButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={outlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={DisabledOutlineButtonsHeadingData} />
            <CommonButtons raised className='btn-pill' commonButtonsData={gradientButtonsData} title={GradientButtonsHeading} subTitle={GraddienButtonsHeadingData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RaisedButtons;
