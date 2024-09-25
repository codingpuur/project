"use client";
import { ImagePath } from "@/Constant";
import { CommonLogoprops } from "@/Types/MiscellaneousTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommonLogo: React.FC<CommonLogoprops> = ({ alignLogo }) => {
  return (
    <Link className={`logo ${alignLogo ? alignLogo : ""} `} href={`/dashboards/shoppingplace`}>
      <Image className='img-fluid for-light' src={`${ImagePath}/logo/logo-1.png`} alt='looginpage' height={100} width={100} />
      <Image className='img-fluid for-dark' src={`${ImagePath}/logo/logo-3.png`} alt='looginpage' height={100} width={100} />
    </Link>
  );
};

export default CommonLogo;
