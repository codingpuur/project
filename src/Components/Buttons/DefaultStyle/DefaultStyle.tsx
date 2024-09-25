"use client";
import { Col, Container, Row } from 'reactstrap'
import { ActiveButtonsHeading, ActiveButtonsHeadingData, BoldBorderOutlineButtonsHeading, BoldBorderOutlineButtonsHeadingData, Buttons, DefaultButtonsHeading, DefaultStyles, DisabledButtonsHeading, DisabledButtonsHeadingData, DisabledOutlineButtonsHeading, DisabledOutlineButtonsHeadingData, ExtraSmallButtonsHeading, ExtraSmallButtonsHeadingData, GraddienButtonsHeadingData, GradientButtonsHeading, LargeButtonsHeading, LargeButtonsHeadingData, OutlineButtonsHeading, OutlineButtonsHeadingData, OutlineExtraSmallButtonsHeading, OutlineExtraSmallButtonsHeadingData, OutlineLargeButtonsHeading, OutlineLargeButtonsHeadingData, OutlineSmallButtonsHeading, OutlineSmallButtonsHeadingData, SmallButtonsHeading, SmallButtonsHeadingData, defaultButtonsHeadingData } from '@/utils/Constant'
import CommonButtons from '../CommonButtons/CommonButtons'
import { activeButtonsData, boldBorderOutlineButtonsData, defaultButtonsData, disabledButtonsData, extraSmallButtonsData, gradientButtonsData, largeButtonsData, outlineButtonsData, outlineDisabledButtonsData, outlineExtraSmallButtonsData, outlineLargeButtonsData, outlineSmallButtonsData, smallButtonsData } from '../../../Data/Buttons/DefaultStyle'
import CustomStateButtons from './CustomStateButtons'
import Breadcrumbs from '@/CommonElements/Breadcrumbs/Breadcrumbs'

const DefaultStyle = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DefaultStyles} parent={Buttons} title={DefaultStyles} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <CommonButtons  commonButtonsData={defaultButtonsData}  title={DefaultButtonsHeading} subTitle={defaultButtonsHeadingData} />
            <CommonButtons commonButtonsData={largeButtonsData}  title={LargeButtonsHeading} subTitle={LargeButtonsHeadingData} />
            <CommonButtons commonButtonsData={smallButtonsData}  title={SmallButtonsHeading} subTitle={SmallButtonsHeadingData} />
            <CommonButtons commonButtonsData={extraSmallButtonsData}  title={ExtraSmallButtonsHeading} subTitle={ExtraSmallButtonsHeadingData} />
            <CommonButtons commonButtonsData={activeButtonsData}  title={ActiveButtonsHeading} subTitle={ActiveButtonsHeadingData} />
            <CommonButtons commonButtonsData={disabledButtonsData}  title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} />
            <CustomStateButtons/>
            <CommonButtons commonButtonsData={outlineButtonsData}  title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
            <CommonButtons commonButtonsData={boldBorderOutlineButtonsData}  title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsHeadingData} />
            <CommonButtons commonButtonsData={outlineLargeButtonsData}  title={OutlineLargeButtonsHeading} subTitle={OutlineLargeButtonsHeadingData} />
            <CommonButtons commonButtonsData={outlineSmallButtonsData}  title={OutlineSmallButtonsHeading} subTitle={OutlineSmallButtonsHeadingData} />
            <CommonButtons commonButtonsData={outlineExtraSmallButtonsData}  title={OutlineExtraSmallButtonsHeading} subTitle={OutlineExtraSmallButtonsHeadingData} />
            <CommonButtons commonButtonsData={outlineDisabledButtonsData}  title={DisabledOutlineButtonsHeading} subTitle={DisabledOutlineButtonsHeadingData} />
            <CommonButtons commonButtonsData={gradientButtonsData}  title={GradientButtonsHeading} subTitle={GraddienButtonsHeadingData} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DefaultStyle