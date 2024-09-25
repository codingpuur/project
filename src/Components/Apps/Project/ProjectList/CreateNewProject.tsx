import { PlusCircle } from "react-feather";
import { Col } from "reactstrap";
import { CreateNewProjects } from "@/utils/Constant";
import Link from "next/link";

const CreateNewProject = () => {
  return (
    <Col md={6}>
      <div className='text-end'>
        <Link className='btn btn-primary' style={{ color: "white" }} href={`/apps/project/createnew`}>
          <PlusCircle />
          {CreateNewProjects}
        </Link>
      </div>
    </Col>
  );
};

export default CreateNewProject;
