import { Col, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import { IconCheckBoxHeading } from "@/utils/Constant";
import { iconBoxData } from "@/Data/Form/FormControl/FormControlData";

const IconCheckBox = () => {
  return (
    <Col xl={4} sm={12} className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{IconCheckBoxHeading} </h6>
        <FormGroup check className="checkbox checkbox-primary ps-0 main-icon-checkbox" >
          <ListGroup className="checkbox-wrapper flex-row">
            {iconBoxData.map((data, index) => (
              <ListGroupItem key={index}>
                <Input
                  className="checkbox-shadow"
                  id={`checkbox-icon-${index}`}
                  type="checkbox"
                />
                <Label
                  className="form-check-label"
                  htmlFor={`checkbox-icon-${index}`}
                >
                  {" "}
                  <i className={`fa fa-${data.icon}`} />{" "}
                  <span>{data.header}</span>
                </Label>
              </ListGroupItem>
            ))}
          </ListGroup>
        </FormGroup>
      </div>
    </Col>
  );
};

export default IconCheckBox;
