import { BasicDropdownType } from '@/Data/Uikits/Dropdown/DropdownData';
import { Dispatch, SetStateAction } from 'react';

export interface ModalDataType {
  isOpen: boolean;
  header?: boolean;
  class?: string;
  footer?: boolean;
  toggler: () => void;
  title?: string;
  size?: string;
  bodyClass?: string;
  button?: string;
}

export interface PropsTypes {
  modalData: ModalDataType;
  children: string | JSX.Element | JSX.Element[];
}

export interface SimpleNavPropsType {
  basicTab: string;
  setBasicTab: (data: string) => void;
};

export interface ListActiveProps {
  activeList: string,
  setActiveList: (data: string) => void;
}
export interface CollapsePropsType {
  collapesId: { collapes1: boolean; collapes2: boolean };
};

export interface CollapseButtonProps {
  setCollapesId: Dispatch<SetStateAction<{
      collapes1: boolean, collapes2: boolean
  }>>
  collapesId: { collapes1: boolean, collapes2: boolean }
}

export interface BasicDropdownProps {
  item: BasicDropdownType
}

export type DividerBodyType = {
  item: BasicDropdownType
}
