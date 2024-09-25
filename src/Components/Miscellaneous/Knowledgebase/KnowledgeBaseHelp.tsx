import { Search } from "react-feather";
import { Col, Form, Input } from "reactstrap";

const KnowledgeBaseHelp = () => {
  return (
    <Col xs={12}>
      <div className='knowledgebase-bg b-center bg-size' />
      <div className='knowledgebase-search'>
        <div>
          <h3>{"How Can I help you?"}</h3>
          <Form onSubmit={(event) => event.preventDefault()} className='form-inline'>
            <div className='w-100 form-group'>
              <Search />
              <Input className='form-control-plaintext w-100' type='text' placeholder='Type question here' />
            </div>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default KnowledgeBaseHelp;
