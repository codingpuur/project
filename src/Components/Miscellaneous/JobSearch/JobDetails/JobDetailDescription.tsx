import { Card, CardBody, Row } from "reactstrap";
import { Apply, EndlessUnitedStates, Href, ProductDesigner, Similarjobs } from "@/utils/Constant";
import { Rating } from "react-simple-star-rating";
import JobDescriptionBody from "./JobDescriptionBody";
import JobCardsViewClass from "./JobCardsViewClass";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const JobDetailDescription = () => {
  return (
    <>
      <Card>
        <div className='job-search'>
          <CardBody>
            <div className='d-flex'>
              <Image className='img-fluid img-40 m-r-20' src={`${ImagePath}/job-search/1.jpg`} alt='#' height={100} width={100}/>
              <div className='flex-grow-1'>
                <h6 className='f-w-600'>
                  <Link href={Href}>{ProductDesigner}</Link>
                  <span className='pull-right'>
                    <Link className='job-apply-btn btn btn-primary' href={Href}>
                      {Apply}
                    </Link>
                  </span>
                </h6>
                <p>
                  {EndlessUnitedStates}
                  <Rating initialValue={4} size={15} />
                </p>
              </div>
            </div>
            <JobDescriptionBody />
          </CardBody>
        </div>
      </Card>
      <div className='header-faq'>
        <h3 className='mb-0 f-w-600'>{Similarjobs}</h3>
      </div>
      <Row>
        <JobCardsViewClass />
      </Row>
    </>
  );
};

export default JobDetailDescription;
