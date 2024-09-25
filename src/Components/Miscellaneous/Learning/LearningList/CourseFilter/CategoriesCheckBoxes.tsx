import { Badge, Card, Col, Collapse } from "reactstrap";
import HeaderWithIcon from "@/CommonElements/HeaderWithIcon";
import { Categories, Design, Href } from "@/utils/Constant";
import { useState } from "react";
import { designCategoriesData } from "@/Data/Learning/LearningData";
import Link from "next/link";
import DevelopmentCategories from "./DevelopmentCategories";

const CategoriesCheckBoxes = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon
          Heading={Categories}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Collapse isOpen={isOpen}>
          <div className="categories">
            <div className="learning-header">
              <span className="f-w-600">{Design}</span>
            </div>
            <ul>
              {designCategoriesData.map((data, index) => (
                <li key={index}>
                  <Link href={Href}>{data.learningHeading}</Link>
                  <Badge color="primary" className="pull-right">
                    {data.badgeNumber}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <DevelopmentCategories />
        </Collapse>
      </Card>
    </Col>
  );
};

export default CategoriesCheckBoxes;
