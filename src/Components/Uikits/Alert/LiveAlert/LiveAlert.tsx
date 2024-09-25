import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { LiveAlerts, Showlivealert } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { LiveAlertData } from "@/Data/Uikits/Alert/AlertData";

const LiveAlert = () => {
  const [data, setData] = useState<number[]>([]);
  const RemoveValue = (item: number) => {
    setData(
      data.filter((value, index) => {
        return value !== item;
      })
    );
  };

  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={LiveAlerts} subTitle={LiveAlertData} headClass='pb-0' />
        <CardBody className='live-dark'>
          {data.map((item: any, index: number) => (
            <Alert className='alert-light-dark txt-dark mb-3 alert-dismissible border-0' key={index}>
              <div>{"Nice, you triggered this alert message!"}</div>
              <Button
                color='transperant'
                close
                onClick={() => {
                  RemoveValue(item);
                }}
              />
            </Alert>
          ))}
          <Button
            color='dark'
            onClick={() => {
              setData((pre) => [...pre, pre.length + 1]);
            }}
          >
            {Showlivealert}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveAlert;
