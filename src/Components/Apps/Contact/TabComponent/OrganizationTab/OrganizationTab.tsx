import { Card, CardBody, CardHeader, Col, Row, TabContent } from "reactstrap";
import { Contacts, Organization } from "@/utils/Constant";
import { useCallback, useState } from "react";
import NavOrg from "./NavOrg";
import TabOrg from "./TabOrg";

const OrganizationTab = () => {
  const [orgactiveTab, setOrgActiveTab] = useState('1');
  const callback = useCallback((tab:string) => {
    setOrgActiveTab(tab);
  }, []);
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h3>{Organization}</h3>
        <span className="f-14 pull-right mt-0">4 {Contacts}</span>
      </CardHeader>
      <CardBody className="p-0">
        <Row className="list-persons">
          <NavOrg callback={callback} />
          <Col xl={8} md={7} className="xl-50">
            <TabContent activeTab={orgactiveTab}>
              <TabOrg />
            </TabContent>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default OrganizationTab;
