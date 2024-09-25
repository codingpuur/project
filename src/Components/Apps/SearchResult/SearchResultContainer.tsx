"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { SearchPages, SearchWebsite } from "@/utils/Constant";
import SearchInput from "./SearchInput";
import SearchTabs from "./SearchTabs";
import { useCallback, useState } from "react";
import SearchTabContent from "./SearchTabContent/SearchTabContent";

const SearchResultContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={SearchWebsite} title={SearchWebsite} parent={SearchPages} />
      <Container fluid className='search-page'>
        <Row>
          <Col sm={12}>
            <Card>
              <SearchInput />
              <CardBody>
                <SearchTabs callbackActive={callback} activeTabValue={1} />
                <SearchTabContent activeTab={activeTab} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchResultContainer;
