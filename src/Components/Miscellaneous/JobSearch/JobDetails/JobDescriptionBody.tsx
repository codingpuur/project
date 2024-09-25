import { Button } from "reactstrap";
import { jobDetailData } from "@/Data/JobSearch/CardViewData";
import { JobDescription, Savethisjob, Share } from "@/utils/Constant";

const JobDescriptionBody = () => {
  return (
    <>
      <div className="job-description">
        <h3>{JobDescription} </h3>
        <p className="text-start">
          {
            "Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team."
          }
        </p>
      </div>
      {jobDetailData.map((data,i) => (
        <div className="job-description" key={i}>
          <h3>{data.header}</h3>
          <ul>
            {data.detail.map((item,i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="job-description">
        <Button color="primary" className="me-2">
          <span>
            <i className="fa fa-check"></i>
          </span>{" "}
          {Savethisjob}
        </Button>
        <Button color="primary">
          <span>
            <i className="fa fa-share-alt"></i> 
          </span>{" "}
          {Share}
        </Button>
      </div>
    </>
  );
};

export default JobDescriptionBody;
