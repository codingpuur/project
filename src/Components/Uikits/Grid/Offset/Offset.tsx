import { Card, CardBody, CardFooter, Col } from "reactstrap";
import OffsetBody from "./OffsetBody";
import OffsetDataTable from "./OffsetDataTable";
import { Offsets } from "@/utils/Constant";
import { OffsetData } from "@/Data/Uikits/Grid/GridData";
import CommonHeader from "@/Common/CommonHeader";

const Offset = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Offsets} subTitle={OffsetData} headClass='pb-0'/>
        <CardBody className="grid-showcase">
          <OffsetBody />
        </CardBody>
        <CardFooter>
          <OffsetDataTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Offset;
