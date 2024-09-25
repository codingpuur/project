import { NoDataFoundPropsType } from "@/Types/Apps/ContactTypes";
import { Card, CardBody, CardHeader } from "reactstrap";

const NoDataFoundClass:React.FC<NoDataFoundPropsType> = ({ title }) => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h3>{title}</h3>
        <span className="f-14 pull-right mt-0">4 Contacts</span>
      </CardHeader>
      <CardBody>
        <p>No Data Found</p>
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
