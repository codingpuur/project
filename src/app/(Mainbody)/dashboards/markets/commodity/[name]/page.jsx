"use client"

import ApexChartContainer from '@/Components/Market/ApexChart/ApexChartContainer'
// import { useRouter } from 'next/router'
import React from 'react'

const page = ({params}) => {
    const {name} = params
   
  return (
    <div>
        <ApexChartContainer name={name} />
     
    
    </div>
  )
}

export default page



