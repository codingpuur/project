"use client";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { FeaturedTutorials, Knowledgebases } from "@/utils/Constant";
import FeaturesTutorial from "../FAQ/FAQFeaturesTutorial/FeaturesTutorial";
import ArticeVideo from "../FAQ/ArticeVideo/ArticeVideo";
import Articals from "../FAQ/Articals/Articals";
import KnowledgeBaseHelp from "./KnowledgeBaseHelp";
import CategoryData from "./CategoryData";

const KnowledgebaseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Knowledgebases} parent={Knowledgebases} title={Knowledgebases} />
      <Container fluid>
        <Row>
          <KnowledgeBaseHelp />
          <Articals />
          <CategoryData />
          <Col lg={12} className='featured-tutorial'>
            <div className='header-faq'>
              <h3 className='mb-0'>{FeaturedTutorials}</h3>
            </div>
            <Row>
              <FeaturesTutorial />
            </Row>
          </Col>
          <ArticeVideo />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgebaseContainer;
