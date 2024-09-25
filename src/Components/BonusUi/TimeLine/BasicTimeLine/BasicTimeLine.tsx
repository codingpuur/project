import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicTimeline } from "@/utils/Constant";
import { BasicTimeLineData, basicTimeLineData } from "@/Data/BonusUi/TimeLine/TimeLineData";

const BasicTimeLine = () => {
  return (
    <Col xl={6} className=" box-col-6 notification main-timeline">
      <Card className="height-equal">
        <CommonHeader title={BasicTimeline} subTitle={BasicTimeLineData} headClass="pb-0" />
        <CardBody className="dark-timeline">
          <ul >
            {basicTimeLineData &&
              basicTimeLineData.map((item, index) => (
                <li className="d-flex" key={index}>
                  <div className={item.class} />
                  <div className="w-100 ms-3">
                    <p className="d-flex justify-content-between mb-2">
                      <span className="date-content light-background">
                        {item.date}
                      </span>
                      <span>{item.time}</span>
                    </p>
                    <h3>
                      {item.title}
                      <span className="dot-notification" />
                    </h3>
                    <p className="f-light">{item.text}</p>
                  </div>
                </li>
              ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTimeLine;
