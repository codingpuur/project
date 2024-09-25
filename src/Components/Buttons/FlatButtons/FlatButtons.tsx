"use client";
import { Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '@/CommonElements/Breadcrumbs/Breadcrumbs'
import { activeButtonsData, boldBorderOutlineButtonsData, defaultButtonsData, disabledButtonsData, extraSmallButtonsData, gradientButtonsData, largeButtonsData, outlineButtonsData, outlineDisabledButtonsData, outlineExtraSmallButtonsData, outlineLargeButtonsData, outlineSmallButtonsData, smallButtonsData } from '@/Data/Buttons/DefaultStyle'
import { ActiveButtonsHeading, ActiveButtonsHeadingData, BoldBorderOutlineButtonsHeading, BoldBorderOutlineButtonsHeadingData, Buttons, DefaultButtonsHeading, DisabledButtonsHeading, DisabledButtonsHeadingData, DisabledOutlineButtonsHeading, DisabledOutlineButtonsHeadingData, ExtraSmallButtonsHeading, ExtraSmallButtonsHeadingData, FlatButton, GraddienButtonsHeadingData, GradientButtonsHeading, LargeButtonsHeading, LargeButtonsHeadingData, OutlineButtonsHeading, OutlineButtonsHeadingData, OutlineExtraSmallButtonsHeading, OutlineExtraSmallButtonsHeadingData, OutlineLargeButtonsHeading, OutlineLargeButtonsHeadingData, OutlineSmallButtonsHeading, OutlineSmallButtonsHeadingData, SmallButtonsHeading, SmallButtonsHeadingData, defaultButtonsHeadingData } from '@/utils/Constant'
import CommonButtons from '../CommonButtons/CommonButtons'
import CustomStateButtons from '../DefaultStyle/CustomStateButtons'

const FlatButtons = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FlatButton} parent={Buttons} title={FlatButton} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <CommonButtons className="btn-square" commonButtonsData={defaultButtonsData}  title={DefaultButtonsHeading} subTitle={defaultButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={largeButtonsData}  title={LargeButtonsHeading} subTitle={LargeButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={smallButtonsData}  title={SmallButtonsHeading} subTitle={SmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={extraSmallButtonsData}  title={ExtraSmallButtonsHeading} subTitle={ExtraSmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={activeButtonsData}  title={ActiveButtonsHeading} subTitle={ActiveButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={disabledButtonsData}  title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} />
            <CustomStateButtons classData={"btn-square"}/>
            <CommonButtons className="btn-square" commonButtonsData={outlineButtonsData}  title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={boldBorderOutlineButtonsData}  title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={outlineLargeButtonsData}  title={OutlineLargeButtonsHeading} subTitle={OutlineLargeButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={outlineSmallButtonsData}  title={OutlineSmallButtonsHeading} subTitle={OutlineSmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={outlineExtraSmallButtonsData}  title={OutlineExtraSmallButtonsHeading} subTitle={OutlineExtraSmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={outlineDisabledButtonsData}  title={DisabledOutlineButtonsHeading} subTitle={DisabledOutlineButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={gradientButtonsData}  title={GradientButtonsHeading} subTitle={GraddienButtonsHeadingData} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FlatButtons