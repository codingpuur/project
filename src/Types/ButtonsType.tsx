import { buttonsType } from "@/Data/Buttons/DefaultStyle";

interface commonButtonsDataType {
    id: string;
    toolTipText: string;
    color: string;
    tittle: string;
    size?: string;
    active?: boolean;
    disabled?: boolean;
    outline?: boolean;
  }
  
  interface subTitleType {
    text?: string;
    code?: string;
  }
  
  interface commonButtonsInterFace {
    raised?: boolean;
    className?: string;
    commonButtonsData: commonButtonsDataType[];
    title: string;
    subTitle: string;
  }
  
  export interface groupButton {
    title: string;
    color: buttonColor[];
  }
  
  interface buttonColor {
    colorClass: string;
    btnClass?: string;
    colClass?: string;
    size?: string;
    differentClass?: string;
    leftButtonClass?: string;
    rightButtonClass?: string;
    title1: string;
    title2: string;
    title3: string;
  }
  
  export interface buttonSub {
    btnClass: string;
    colorClass: string;
    divClass: string;
    id1: string;
    title1: string;
    id2: string;
    title2: string;
    checkBox?: boolean;
    colClass?: string;
  }
  
  export interface radioBtnDataItem {
    title: string;
    span: string;
    btnSub: buttonSub[];
  }
  export interface buttonPropsType {
    btnItem: buttonSub;
  }
  
  export interface commonButtonsToolTip {
    toolTipText: string;
    id: string;
  }
  
  export interface commonDropDownPropsType {
    color: string;
    className?: string;
  }

  export interface defaultType {
    commonButtonsData:  buttonsType[]
    title : string
    subTitle : string
    className? : string
    raised? : boolean
}

export interface commonCardHeadingPropsType {
  bigHeadingClassName?: string;
  Heading?:string
  smallHeading?:string
  span?:string
  headingClassName?:string
  span2?:string
}