import { jobData } from "@/Data/JobSearch/CardViewData";
import { Badge, Card, CardBody, Col } from "reactstrap";
import { Href } from "@/utils/Constant";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import Link from "next/link";
import { ImagePath } from "@/Constant";
const JobCardsViewClass = () => {
  return (
    <>
      {jobData &&
        jobData.slice(0, 5).map((item, index) => (
          <Col xl={index !== 4 ? 6 : 12} className={index !== 4 ? "xl-100" : ""} key={item.id}>
            <Card className={`${item.ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
              {item.ribbion ? (
                <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && "d-none"}`}>
                  <i className='icofont icofont-love'></i>
                </div>
              ) : (
                "  "
              )}
              <div className='job-search'>
                <CardBody>
                  <div className='d-flex'>
                    <Image width={40} height={40} className='img-40 img-fluid m-r-20' src={`${ImagePath}/${item.logo}`} alt='job' />
                    <div className='flex-grow-1'>
                      <h6>
                        <Link href={Href}>{item.job_name}</Link>
                        {item.type === "new" ? (
                          <Badge color='primary' className='pull-right'>
                            {item.badgeValue}
                          </Badge>
                        ) : (
                          <span className='pull-right'>{item.type}</span>
                        )}
                      </h6>
                      <p>
                        {item.job_area}, {item.job_city}
                        <Rating initialValue={Math.random() * 5} size={14} />
                      </p>
                    </div>
                  </div>
                  <p>{item.Job_description}</p>
                </CardBody>
              </div>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default JobCardsViewClass;
