import { Button, Card, CardBody, CardFooter } from "reactstrap";
import { Cancel, Href, PersonalDetails, Savethisjob, Submit, UIDesigner, UploadYourFiles, YourEducation, YourExperience } from "@/utils/Constant";
import { Rating } from "react-simple-star-rating";
import PersonalDetail from "./PersonalDetail/PersonalDetail";
import EducationClass from "./EducationClass/EducationClass";
import ExperienceClass from "./ExperienceClass/ExperienceClass";
import UploadFileClass from "./UploadFileClass/UploadFileClass";
import Link from "next/link";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const JobApplyForm = () => {
  return (
    <Card>
      <div className='job-search'>
        <CardBody className='pb-0'>
          <div className='d-flex'>
            <Image width={40} height={40} className='img-40 img-fluid  m-r-20' src={`${ImagePath}/job-search/1.jpg`} alt='' />
            <div className='flex-grow-1'>
              <h6 className='f-w-600'>
                <Link href={Href}>{UIDesigner}</Link>
                <span className='pull-right'>
                  <Button color='primary'>
                    <span>
                      <i className='fa fa-check text-white' />
                    </span>
                    {Savethisjob}
                  </Button>
                </span>
              </h6>
              <p>
                {"Cion Telecom & Technologies , NY"}
                <Rating initialValue={Math.random() * 5} size={15} />
              </p>
            </div>
          </div>
          <div className='job-description'>
            <h6 className='mb-0'>{PersonalDetails}</h6>
            <PersonalDetail />
            <h6 className='mb-0'>{YourEducation}</h6>
            <EducationClass />
            <h6 className='mb-0'>{YourExperience}</h6>
            <ExperienceClass />
            <h6 className='mb-0'>{UploadYourFiles}</h6>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color='primary mx-1'>{Submit}</Button>
          <Button color='light'>{Cancel}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApplyForm;
