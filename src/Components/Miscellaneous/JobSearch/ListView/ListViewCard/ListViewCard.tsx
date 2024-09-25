import { Card, CardBody } from "reactstrap";
import { jobData } from "@/Data/JobSearch/CardViewData";
import { Rating } from "react-simple-star-rating";
import { Href } from "@/utils/Constant";
import Image from "next/image";
import Link from "next/link";
import { ImagePath } from "@/Constant";

const ListViewCard = () => {
  return (
    <>
      {jobData.slice(0, 8).map((item) => (
        <Card key={item.id} className={`${item.ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
          {item.ribbion ? (
            <div
              className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && "d-none" }`}>
              <i className="icofont icofont-love"></i>
            </div>
          ) : ( "")}
          <div className="job-search">
            <CardBody>
              <div className="d-flex">
                <Image className="img-40 img-fluid m-r-20" width={40} height={40} src={`${ImagePath}/${item.logo}`} alt="job logo"/>
                <div>
                  <h6>
                    <Link href={Href}>{item.job_name}</Link>
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
      ))}
    </>
  );
};

export default ListViewCard;
