 export type data = []

 interface SwitchDataInterFace {
    color: string;
    header: string;
  }

 export interface CommonIconsSwitchType {
    switchData: SwitchDataInterFace[];
    mediaBodyClassName?: string;
    defaultUnChecked?: boolean;
  }

  export interface CommonCustomSwitchType {
    cardWrapperClassName?: string;
    formCheckSizeClassName?: string;
    disabled?: boolean;
  }

  export  interface SwitchSizePropsType{
    icons?:boolean
}

//touchspin types
export type TouchSpinPropsType = {
  touchSpinClassNames: string[];
  cardBodyClassName?: string;
  arrowIcon?: boolean;
};

export interface TouchSpinsProp {
  item: string;
  arrowIcon?: boolean;
}

export type CommonPrefixAndPostFixPropsType = {
  postIcon?: boolean;
  preIcon?: boolean;
  preButton?: boolean;
  PostButton?: boolean;
  differentColor?: boolean;
};
