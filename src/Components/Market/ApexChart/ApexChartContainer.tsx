

// "use client";
// import React, { useState, useEffect } from "react";
// import { Container, Row, Spinner } from "reactstrap";
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

// const ApexChartContainer = ({name}: any) => {
//   const lowerCaseName = name.toUpperCase();
//   const [chartData, setChartData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true); // Loading state

//   const abc:any = { "copper":"HGUSD",
//     "crude-oil":"CLUSD",
//     "gold":"GCUSD",
//     "natural-gas":"NGUSD",
//     "silver":"SIUSD",
//     "zinc":"PLUSD",
//     "aluminium":"ALIUSD"
//   }

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://financialmodelingprep.com/api/v3/historical-price-full/${abc[name]}?apikey=wOHS3XwpMyjaBoFj3ElWXzDpDVSZYhs9`
//         );
//         const data = await response.json();
//         setChartData(data.historical);
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false); // Set loading to false if there's an error
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <Breadcrumbs mainTitle={name} title={name} parent={"Market"} />
//       <Container fluid>
//         <Row>
//           {loading ? (
//             // Show loader while fetching data
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//               <Spinner color="primary" />
//             </div>
//           ) : (
//             <>
//               {/* Render charts or tables based on the API data */}
//               <CandlestickChartClass data={chartData} />
//               <DerivativeAnalysisTable commodities={lowerCaseName} />
//             </>
//           )}

//           {/* Other components */}
//           <BasicAreaChartClass data={chartData} />
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default ApexChartContainer;


"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
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
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import LineChartClass from "./LineChart/LineChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  "CE": {
    "87000": {
      "ask": 0,
      "bid": 0,
      "fyToken": "1120241126429388",
      "ltp": 3820,
      "ltpch": 792.5,
      "ltpchp": 26.18,
      "oi": 504,
      "oich": -5,
      "oichp": -0.98,
      "option_type": "CE",
      "prev_oi": 509,
      "strike_price": 87000,
      "symbol": "MCX:SILVER24NOV87000CE",
      "volume": 188,
      "iv": null
    },
    "88000": {
      "ask": 0,
      "bid": 0,
      "fyToken": "1120241126429389",
      "ltp": 3830,
      "ltpch": 795.0,
      "ltpchp": 27.0,
      "oi": 510,
      "oich": -6,
      "oichp": -1.1,
      "option_type": "CE",
      "prev_oi": 511,
      "strike_price": 88000,
      "symbol": "MCX:SILVER24NOV88000CE",
      "volume": 200,
      "iv": 15.0
    }
  }
};
const formattedData = Array.isArray(data.CE) 
    ? Object.entries(data.CE).map(([key, value]) => ({
        x: value.strike_price,
        y: value.iv || 0
    }))
    : []; 

// Chart.js configuration
const chartData = {
  labels: formattedData.map((item) => item.x),  // X-axis labels
  datasets: [
      {
          label: 'IV vs Strike Price',
          data: formattedData.map((item) => item.y),  // Y-axis values
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
      }
  ]
};

const options = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Strike Price'
      }
    },
    y: {
      title: {
        display: true,
        text: 'IV'
      }
    }
  }
};
const ApexChartContainer = ({ name }: any) => {
  const lowerCaseName = name.toUpperCase();
  const [chartData, setChartData] = useState<any>(null);
  const [chartDataFut, setChartDataFut] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false); // Modal visibility state


  const abc: any = {
    "copper": "HGUSD",
    "crude-oil": "CLUSD",
    "gold": "GCUSD",
    "natural-gas": "NGUSD",
    "silver": "SIUSD",
    "zinc": "PLUSD",
    "aluminium": "ALIUSD"
  };


  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://nazariya-test.vercel.app/api/historical-data/${name}`, // Adjust URL as needed
        {
          method: "POST", // Use POST method
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
         
        }
      );

      const data = await response.json();
      setChartData(data); // Update the state with the response data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const fetchDatafut = async () => {
    try {
      const response = await fetch(
        `https://nazariya-test.vercel.app/api/volatility-data/${name}`, // Adjust URL as needed
        {
          method: "POST", // Use POST method
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
         
        }
      );

      const data = await response.json();
      setChartDataFut(data); // Update the state with the response data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Fetch data from the API
  useEffect(() => {
 
  
    fetchData();
    fetchDatafut();
  
    // Set interval to open modal every 30 seconds
    const interval = setInterval(() => {
      setModalOpen(true);
    }, 500000); // Adjust interval as needed
  
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [name]);
  

  // Close the modal
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  console.log(chartDataFut) 

  return (
    <>
      <Breadcrumbs mainTitle={name} title={name} parent={"Market"} />
      <Container fluid>
        <Row>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
              <Spinner color="primary" />
            </div>
          ) : (
            <>
              <CandlestickChartClass data={chartData} />
              {/* <AreaSpalineChartClass data={chartData} /> */}
              {/* <Line data={chartData} options={options} /> */}
<LineChartClass data={chartDataFut?.CE} title="Call Option Price Movement"/>
<LineChartClass data={chartDataFut?.PE} title="Put Option Price Movement"/>
            
<BasicAreaChartClass data={chartData} />
              <DerivativeAnalysisTable commodities={lowerCaseName} />
            </>
          )}

      
         
        </Row>
      </Container>

      {/* Modal component */}
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Action Required</ModalHeader>
        <ModalBody>
          <p>Some text goes here. Perform your action now!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggleModal}>Buy</Button>
          <Button color="danger" onClick={toggleModal}>Sell</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ApexChartContainer;
