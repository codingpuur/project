import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Customers } from "@/utils/Constant";
import { customersData } from "@/Data/Dashboard/CRM/DealOpen";
import CustomerChart from "./CustomerChart";

const Customer = () => {
  return (
    <Col xl={12} lg={6}>
      <Card className='customer-chart'>
        <CardHeader className='pb-0'>
          <div className='header-top'>
            <h3 className='m-0'>{Customers}</h3>
          </div>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xxl={4}>
              <ul>
                {customersData.map((data, index) => (
                  <li className='d-flex align-items-center' key={index}>
                    <div className={`circle-dashed-${data.color}`}>
                      <span></span>
                    </div>
                    <div className='flex-grow-1'>
                      <p>{data.title}</p>
                      <span>{data.count}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
            <CustomerChart />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Customer;
