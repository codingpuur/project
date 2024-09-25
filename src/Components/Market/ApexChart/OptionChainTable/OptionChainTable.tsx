// components/OptionChainTable.js
import CommonHeader from '@/Common/CommonHeader';
import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const OptionChainTable = ({ optionData }:any) => {
  return (
    <Col sm={12} xl={6} className='box-col-6'>
    <Card>
      <CommonHeader title="Option Chain" headClass='pb-0'/>
      <CardBody>

   


    <div className="containe">
    
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Strike Price</th>
            <th>Call Bid</th>
            <th>Call Ask</th>
            <th>Call Volume</th>
            <th>Put Bid</th>
            <th>Put Ask</th>
            <th>Put Volume</th>
          </tr>
        </thead>
        <tbody>
          {optionData.map((option: { strikePrice: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; callBid: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; callAsk: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; callVolume: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; putBid: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; putAsk: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; putVolume: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
            <tr key={index}>
              <td>{option.strikePrice}</td>
              <td>{option.callBid}</td>
              <td>{option.callAsk}</td>
              <td>{option.callVolume}</td>
              <td>{option.putBid}</td>
              <td>{option.putAsk}</td>
              <td>{option.putVolume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </CardBody>
      </Card>
      </Col>
  );
};

export default OptionChainTable;
