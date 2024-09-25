"use client";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { activeButtonsData, boldBorderOutlineButtonsData, defaultButtonsData, disabledButtonsData, extraSmallButtonsData, gradientButtonsData, largeButtonsData, outlineButtonsData, outlineDisabledButtonsData, outlineExtraSmallButtonsData, outlineLargeButtonsData, outlineSmallButtonsData, smallButtonsData } from "@/Data/Buttons/DefaultStyle";
import { ActiveButtonsHeading, ActiveButtonsHeadingData, BoldBorderOutlineButtonsHeading, BoldBorderOutlineButtonsHeadingData, Buttons, DefaultButtonsHeading, DisabledButtonsHeading, DisabledButtonsHeadingData, DisabledOutlineButtonsHeading, DisabledOutlineButtonsHeadingData, EdgeButton, ExtraSmallButtonsHeading, ExtraSmallButtonsHeadingData, GraddienButtonsHeadingData, GradientButtonsHeading, LargeButtonsHeading, LargeButtonsHeadingData, OutlineButtonsHeading, OutlineButtonsHeadingData, OutlineExtraSmallButtonsHeading, OutlineExtraSmallButtonsHeadingData, OutlineLargeButtonsHeading, OutlineLargeButtonsHeadingData, OutlineSmallButtonsHeading, OutlineSmallButtonsHeadingData, SmallButtonsHeading, SmallButtonsHeadingData, defaultButtonsHeadingData } from "@/utils/Constant";
import CommonButtons from "../CommonButtons/CommonButtons";
import CustomStateButtons from "../DefaultStyle/CustomStateButtons";

const EdgeButtons = () => {
  return (
    <>
      <Breadcrumbs mainTitle={EdgeButton} parent={Buttons} title={EdgeButton} />
      <CommonButtons className='btn-pill' commonButtonsData={defaultButtonsData} title={DefaultButtonsHeading} subTitle={defaultButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={largeButtonsData} title={LargeButtonsHeading} subTitle={LargeButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={smallButtonsData} title={SmallButtonsHeading} subTitle={SmallButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={extraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={ExtraSmallButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={activeButtonsData} title={ActiveButtonsHeading} subTitle={ActiveButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={disabledButtonsData} title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} />
      <CustomStateButtons classData={"btn-pill"} />
      <CommonButtons className='btn-pill' commonButtonsData={outlineButtonsData} title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={boldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={outlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={OutlineLargeButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={outlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={OutlineSmallButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={outlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={OutlineExtraSmallButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={outlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={DisabledOutlineButtonsHeadingData} />
      <CommonButtons className='btn-pill' commonButtonsData={gradientButtonsData} title={GradientButtonsHeading} subTitle={GraddienButtonsHeadingData} />
    </>
  );
};

export default EdgeButtons;
