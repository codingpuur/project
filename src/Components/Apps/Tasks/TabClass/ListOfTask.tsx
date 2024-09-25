import { Card, CardHeader } from "reactstrap";
import { CreatedByMe, Href, Print } from "@/utils/Constant";
import { Printer } from "react-feather";
import CreatedByme from "./CreatedByme";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

const ListOfTask = () => {
  const componentRef = useRef();
  return (
    <Card className='mb-0'>
      <CardHeader className='d-flex'>
        <h3 className='mb-0'>{CreatedByMe}</h3>
        <ReactToPrint
          trigger={() => (
            <a href={Href}>
              <Printer className='me-2' />
              {Print}
            </a>
          )}
          content={() => componentRef.current || null}
        />
      </CardHeader>
      <CreatedByme />
    </Card>
  );
};

export default ListOfTask;
