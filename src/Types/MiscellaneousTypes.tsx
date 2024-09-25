import { ChangeEvent } from "react";
export interface CommonFormPropsType {
  alignLogo?: string;
}

export interface CommonLogoprops {
  alignLogo?: string;
}

export interface ErrorPageCommonProps {
  tittle: number;
  tittleClassName: string;
  BtnClassName: string;
}

export interface SideBarListPropsType {
    level: number;
  }

export interface FormValueInterFace {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  age: string;
  passPort: string;
  country: string;
  state: string;
  city: string;
}

export interface RegisterWizardForm {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  formValue: FormValueInterFace;
}

export interface ErrorPropsType {
  tittle: number;
  tittleClassName: string;
  BtnClassName: string;
}
 export const data = []


 export interface ErrorPropsType {
    tittle: number;
    tittleClassName: string;
    BtnClassName: string;
 }
 
 export interface AccordionCardPropsType {
    item: { id: number; title: string; paragraph: string };
  }
