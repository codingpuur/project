export interface BasicTreesProp {
  variant?: string;
  isOpen?: boolean;
  className?: string;
  onClick?: (e: {}) => void;
}

export interface ImageLabelProp {
  onSelectFile: React.ChangeEventHandler<HTMLInputElement> | undefined;
  scale: string | number | readonly string[] | undefined;
  imgSrc: string;
  setScale: (arg0: number) => void;
  rotate: string | number | readonly string[] | undefined;
  setRotate: (arg0: number) => void;
  aspect: number | undefined;
  handleToggleAspectClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export type CommonRibbonsType = {
  ribbonText: string;
  subText: string ;
  classMain: string;
  ribbonClass: string;
};
export type CommonProfileHeadType = {
  month: string;
  time: string;
  activeTime: string;
};

export interface CommonFileUploadProp {
  maxFiles?: number;
  multiple?: boolean;
  body?:boolean
}
