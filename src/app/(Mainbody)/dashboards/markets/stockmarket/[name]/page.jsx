"use client"


// import { useRouter } from 'next/router'
import React from 'react'
import ApexChartStokes from '@/Components/Market/ApexChart/ApexChartStokes'


const page = ({params}) => {
    const {name} = params
   
  return (
    <div>
        <ApexChartStokes name={name} />
     
    
    </div>
  )
}

export default page



