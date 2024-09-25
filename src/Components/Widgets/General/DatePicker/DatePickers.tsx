import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Card, CardBody, Col } from "reactstrap";

const DatePickers = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (date: [Date | null, Date | null]) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Col xl={4} sm={6} className="d-xxl-block d-xl-none box-col-6">
      <Card className="height-equal-2">
        <CardBody>
          <div className="default-datepicker custom-scrollbar">
            <ReactDatePicker 
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DatePickers;
