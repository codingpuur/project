"use client"

import ApexChartContainer from '@/Components/Market/ApexChart/ApexChartContainer'
import axios from 'axios'
// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'





const page = ({ params}) => {
    const {name} = params
    const [data, setData] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    axios
        .get("/api/proxy") // Call the route handler
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            console.error("Error fetching data:", err.message);

            setError("Failed to fetch data");
        });
}, []);
   
  return (
    <div>
       <h1>Server-Side Request Example</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>No data available</p>
            )}
        <ApexChartContainer name={name} />
     
    
    </div>
  )
}

export default page



