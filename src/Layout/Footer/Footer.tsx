"use client"

import { Col, Container, Row } from 'reactstrap'
import SVG from '../../utils/CommonSvgIcon/SVG'
import { usePathname } from 'next/navigation';
import ChannelTicker from './ChannelTicker';
import './footer.css'
import StockPriceTicker from './StockPriceTicker';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Footer = () => {
  const pathname = usePathname();
  const darkFooter = pathname === `/pagelayout/footerdark` ? "footer-dark" : "";
  const fixedFooter = pathname === `/pagelayout/footerfixed` ? "footer-fix" : "";
  const [tickerItems,setTickerItems]= useState([])
  // const tickerItems = [
  //   'Breaking News: Stock Market Up by 3%!',
  //   'Tech Update: New AI Chip Released',
  //   'Travel Alert: Storm Expected in Florida',
  //   'Sports: Local Team Wins Gold',
  // ];

  const [stocks,setstocks]=useState([])

useEffect(()=>{
  handlesetticeritem();
  handlesetstocks();

},[]);
const handlesetticeritem = ()=>{
  try{
     axios.get('https://api.stockdata.org/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=CbFOVraAbW9pW3aVWiy1r6OVX5IqgNkzIebmK1MU').then((res)=>setTickerItems(res.data.data))
  }
  catch(e){
    console.log(e)
  }

}
const handlesetstocks = ()=>{
  try{
     axios.get('https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=CbFOVraAbW9pW3aVWiy1r6OVX5IqgNkzIebmK1MU').then((res)=>setstocks(res.data.data))
  }
  catch(e){
    console.log(e)
  }

}

  // const stocks = [
  //   { symbol: 'AAPL', price: 175.45, change: 1.2 },
  //   { symbol: 'GOOGL', price: 2875.65, change: -0.8 },
  //   { symbol: 'TSLA', price: 725.30, change: 2.5 },
  //   { symbol: 'AMZN', price: 3450.25, change: 0.7 },
  // ];
  return (
    <footer style={{ margin:"0px" , padding:"0px"}} className={`footer ${darkFooter} ${fixedFooter}`}>
        <Container style={{margin:"0px" , padding:"0px" , width:"100%"}} fluid >
        <Row>
          <Col>
            <ChannelTicker items={tickerItems} speed={20} />
          </Col>
        </Row>
            <Row>
                {/* <Col md={6} className="footer-copyright">
                    <p className="mb-0">Copyright 2024 © Cion theme by pixelstrap.</p>
                </Col> 
                <Col md={6}>
                    <p className="float-end mb-0">Hand crafted &amp; made with
                        <SVG iconId='heart' className="footer-icon" />
                    </p>
                </Col> */}
                <Col>
                <StockPriceTicker stocks={stocks} speed={20} />
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer