import { Col, Row } from "reactstrap";
import { Comments } from "@/utils/Constant";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const UserComment = () => {
  return (
    <ul>
      <li>
        <div className='d-flex align-self-center'>
          <Image className='align-self-center' src={`${ImagePath}/blog/comment.jpg`} alt='Generic placeholder image' height={100} width={100} />
          <div className='flex-grow-1'>
            <Row>
              <Col md={4} className='xl-100'>
                <h4 className='mt-0'>
                  Jolio Mark<span> ( Designer )</span>
                </h4>
              </Col>
              <Col md={8} className='xl-100'>
                <ul className='comment-social float-start float-md-end learning-comment flex-row'>
                  <li>
                    <i className='icofont icofont-thumbs-up' /> 02 {"Hits"}
                  </li>
                  <li>
                    <i className='icofont icofont-ui-chat' /> 598 {Comments}
                  </li>
                </ul>
              </Col>
            </Row>
            <p>{"The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant."}</p>
          </div>
        </div>
      </li>
      <li>
        <ul>
          <li>
            <div className='d-flex'>
              <Image className='align-self-center' src={`${ImagePath}/blog/9.jpg`} alt='Generic placeholder image' height={100} width={100} />
              <div className='flex-grow-1'>
                <Row>
                  <Col xl={12}>
                    <h4 className='mt-0'>
                      John deo<span> ( Designer )</span>
                    </h4>
                  </Col>
                </Row>
                <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div className='d-flex'>
          <Image className='align-self-center' src={`${ImagePath}/blog/4.jpg`} alt='Generic placeholder image' height={100} width={100} />
          <div className='flex-grow-1'>
            <Row>
              <Col md={4} className='xl-100'>
                <h4 className='mt-0'>
                  Mark Jolio<span> ( Designer )</span>
                </h4>
              </Col>
              <Col md={8} className='xl-100'>
                <ul className='comment-social float-start float-md-end learning-comment flex-row'>
                  <li>
                    <i className='icofont icofont-thumbs-up' /> 02 {"Hits"}
                  </li>
                  <li>
                    <i className='icofont icofont-ui-chat' /> 598 {Comments}
                  </li>
                </ul>
              </Col>
            </Row>
            <p>{"Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town."}</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default UserComment;
