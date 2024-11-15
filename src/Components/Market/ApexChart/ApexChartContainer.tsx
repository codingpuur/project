// "use client";
// import React from "react";
// import { Container, Row } from "reactstrap";
// import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
// import { ApexChartHeading, Chart } from "@/utils/Constant";
// import BasicAreaChartClass from "./BasicAreaChartClass/BasicAreaChartClass";
// import AreaSpalineChartClass from "./AreaSpalineChartClass/AreaSpalineChartClass";
// import BarChartClass from "./BarChartClass/BarChartClass";
// import ColumnChartClass from "./ColumnChartClass/ColumnChartClass";
// import BubbleChartClass from "./BubbleChartClass/BubbleChartClass";
// import SteplineChartClass from "./SteplineChartClass/SteplineChartClass";
// import ApexLineChartClass from "./ApexLineChartClass/ApexLineChartClass";
// import PieChartClass from "./PieChartClass/PieChartClass";
// import DonutChartClass from "./DonutChartClass/DonutChartClass";
// import MixedChartClass from "./MixedChartClass/MixedChartClass";
// import CandlestickChartClass from "./CandlestickChartClass/CandlestickChartClass";
// import RadarChartClass from "./RadarChartClass/RadarChartClass";
// import RadialBarChartClass from "./RadialBarChartClass/RadialBarChartClass";
// import DerivativeAnalysisTable from "./DerivativeAnalysisTable/DerivativeAnalysisTable";
// import StockTable from "./StockTable/StockTable";
// import SectorPerformanceChart from "./SectorPerformanceChart/SectorPerformanceChart";

// const ApexChartContainer = ({name}:any) => {
//   const lowerCaseName = name.toUpperCase();



//   return (
//     <>
//       <Breadcrumbs mainTitle={name} title={name} parent={"Market"} />
//       <Container fluid>
//         <Row>
//           {/* <BasicAreaChartClass />
//           <AreaSpalineChartClass />
//           <BarChartClass />
//           <ColumnChartClass />
//           <BubbleChartClass />
//           <SteplineChartClass />
//           <ApexLineChartClass />
//           <PieChartClass />
//           <DonutChartClass />
//           <MixedChartClass /> */}
//           <CandlestickChartClass />
//           <DerivativeAnalysisTable commodities={lowerCaseName} />

//           {/* <RadarChartClass /> */}
//           {/* <RadialBarChartClass /> */}
//           <BasicAreaChartClass />
        
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default ApexChartContainer;


"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { ApexChartHeading, Chart } from "@/utils/Constant";
import BasicAreaChartClass from "./BasicAreaChartClass/BasicAreaChartClass";
import AreaSpalineChartClass from "./AreaSpalineChartClass/AreaSpalineChartClass";
import BarChartClass from "./BarChartClass/BarChartClass";
import ColumnChartClass from "./ColumnChartClass/ColumnChartClass";
import BubbleChartClass from "./BubbleChartClass/BubbleChartClass";
import SteplineChartClass from "./SteplineChartClass/SteplineChartClass";
import ApexLineChartClass from "./ApexLineChartClass/ApexLineChartClass";
import PieChartClass from "./PieChartClass/PieChartClass";
import DonutChartClass from "./DonutChartClass/DonutChartClass";
import MixedChartClass from "./MixedChartClass/MixedChartClass";
import CandlestickChartClass from "./CandlestickChartClass/CandlestickChartClass";
import RadarChartClass from "./RadarChartClass/RadarChartClass";
import RadialBarChartClass from "./RadialBarChartClass/RadialBarChartClass";
import DerivativeAnalysisTable from "./DerivativeAnalysisTable/DerivativeAnalysisTable";
import StockTable from "./StockTable/StockTable";
import SectorPerformanceChart from "./SectorPerformanceChart/SectorPerformanceChart";

const ApexChartContainer = ({name}: any) => {
  const lowerCaseName = name.toUpperCase();
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const abc:any = { "copper":"HGUSD",
    "crude-oil":"CLUSD",
    "gold":"GCUSD",
    "natural-gas":"NGUSD",
    "silver":"SIUSD",
    "zinc":"PLUSD",
    "aluminium":"ALIUSD"
  }

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/historical-price-full/${abc[name]}?apikey=wOHS3XwpMyjaBoFj3ElWXzDpDVSZYhs9`
        );
        const data = await response.json();
        setChartData(data.historical);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Breadcrumbs mainTitle={name} title={name} parent={"Market"} />
      <Container fluid>
        <Row>
          {loading ? (
            // Show loader while fetching data
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
              <Spinner color="primary" />
            </div>
          ) : (
            <>
              {/* Render charts or tables based on the API data */}
              <CandlestickChartClass data={chartData} />
              <DerivativeAnalysisTable commodities={lowerCaseName} />
            </>
          )}

          {/* Other components */}
          <BasicAreaChartClass data={chartData} />
        </Row>
      </Container>
    </>
  );
};

export default ApexChartContainer;
