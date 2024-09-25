import { Alert, Card, CardBody, Col } from "reactstrap";
import { AdditionalContent } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { AdditionalAlertTopData, additionalAlertData } from "@/Data/Uikits/Alert/AlertData";

const AdditionalAlert = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={AdditionalContent} subTitle={AdditionalAlertTopData} headClass='pb-0' />
        <CardBody className='dark-alert'>
          {additionalAlertData &&
            additionalAlertData.map((item, index) => (
              <Alert className={`${item.class}`} key={index} color=''>
                <h3 className={`alert-heading pb-2 ${item.headclass}`}>{item.head}</h3>
                <p className='txt-dark'>{item.text}</p>
                <hr />
                <p className='mb-0 txt-dark'>{item.subtext}</p>
              </Alert>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalAlert;
