import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Row } from "reactstrap";

const BlogComment = ({ data }: any) => {
  return (
    <>
      <div className='d-flex align-self-center'>
        <Image className='align-self-center' src={`${ImagePath}/${data.src}`} alt='Generic placeholder image' height={100} width={100} />
        <div className='flex-grow-1'>
          <Row>
            <Col md={4}>
              <h4 className='mt-0'>
                {data.name}
                <span>({data.post})</span>
              </h4>
            </Col>
            <Col md={8}>
              <ul className='comment-social float-start float-md-end flex-row'>
                <li>
                  <i className='icofont icofont-thumbs-up'> </i>
                  {data.hits}
                </li>
                <li>
                  <i className='icofont icofont-ui-chat'></i>
                  {data.comments}
                </li>
              </ul>
            </Col>
          </Row>
          <p>{data.para}</p>
        </div>
      </div>
    </>
  );
};

export default BlogComment;
