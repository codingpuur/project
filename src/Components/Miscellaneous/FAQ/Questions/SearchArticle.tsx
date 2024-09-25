import { HelpCircle, Search } from "react-feather";
import { Card, CardBody, CardHeader, Col, Input } from "reactstrap";
import { SearchArticles } from "@/utils/Constant";

const SearchArticle = () => {
  return (
    <Col lg={12}>
      <Card className='card-mb-faq xs-mt-search'>
        <CardHeader className='faq-header'>
          <h3 className='m-0'>{SearchArticles}</h3> 
          <HelpCircle />
        </CardHeader> 
        <CardBody className='faq-body'>
          <div className='faq-form'> 
            <Input type='text' placeholder='Search..' />
            <Search className='search-icon' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SearchArticle;
