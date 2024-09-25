import { Card, Col } from "reactstrap";
import { imagePath } from "@/Data/Learning/LearningData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const SmallLearningCards = () => {
  return (
    <>
      {imagePath.map((data, index) => (
        <Col xl={4} sm={6} className="xl-50 box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <Image
                  width={350}
                  height={415}
                  className="img-fluid top-radius-blog"
                  src={`${ImagePath}/faq/${data.img}.jpg`}
                  alt="faq"
                />
                <div className="product-hover">
                  <ul className="simple-list flex-row">
                    <li>
                      <i className="icon-link" />
                    </li>
                    <li>
                      <i className="icon-import" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-details-main">
                <ul className="blog-social simple-list flex-row">
                  <li className="digits">9 April 2023</li>
                  <li className="digits">{"by"} : Admin</li>
                  <li className="digits">0 {"Hits"}</li>
                </ul>
                <hr />
                <h6 className="blog-bottom-details">{data.detail}</h6>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SmallLearningCards;
