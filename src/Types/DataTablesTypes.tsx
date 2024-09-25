import { ChangeEvent } from "react";

export interface StockResultTableData {
  name: string;
  symbol: string;
  price: string;
  difference: JSX.Element;
  last: any;
}

export interface RowCreateCallBackData {
  name: string;
  email: string;
  experience: string;
  sex: string;
  contactNumber: string;
  salary: number;
}

export interface CustomCellInterFace {
  value: number;
}


export  interface AddRowsTable {
    column1: number;
    column2: number;
    column3: number;
    column4: number;
    column5: number;
  }

  export interface DeleteRowData {
    name: string;
    id:number,
    job: string;
    companyName: string;
    invoiceNumber: string;
    credit: any;
    date: string;
    priority: any;
    budget: string;
    action: any;
  }

  export interface TableSearchBarpropsType{
    filteredData:(event:ChangeEvent<HTMLInputElement>)=>void;
  }

  export interface DeleteRowDatas {
    name: string;
    position: string;
    office: string;
    age: number;
    startDate: string;
    salary: string;
  }

  export interface ZeroConfigurationTableColumnsType{
    id:number
    name:string
    position:string
    office:string
    age:number
    startDate:string
    salery:string
    action:any
}

export interface StateSavingTableDataType{
    id:number
    name:string
    position:string
    color:string
    office:string
    age:string
    startDate:string
    salery:string
    action:any
  }
  export interface CustomCellInterFace {
    position:string ,color:string
  }

  export  interface ScrollVerticalType{
    name:JSX.Element
    position:string
    office:string
    age:string
    startDate:string
    salery:string
    action:any
  }

  export interface HtmlColumnsInterface {
    id: number;
    cv: string | React.ReactNode;
    name: string;
    position: string;
    office: string;
    badge: string;
    color: string;
    email: string;
    salary: string;
    action: any;
  }

 export interface CustomCellInterFace {
    position: string;
    color: string;
  }

  export interface AjaxSourcedColumnsInterface {
    name: string;
    position: string;
    office: string;
    date: string;
    extends: string;
    salary: string;
  }

 export interface ServerSideProcessingColumnsType {
    name: string;
    position: string;
    office: string;
    lastName: string;
    date: string;
    salary: string;
  }