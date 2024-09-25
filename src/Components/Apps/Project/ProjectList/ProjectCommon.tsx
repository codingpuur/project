import { Badge, Col, Progress } from "reactstrap";
import { Done } from "@/utils/Constant";
import ProjectDetails from "./ProjectDetails";
import ProjectCustomers from "./ProjectCustomers";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { CommonProjectInterFace } from "@/Types/Apps/ProjectListTypes";

const ProjectCommon:React.FC<CommonProjectInterFace> = ({ item }) => {
  return (
    <Col xxl={4} md={6}>
      <div className='project-box'>
        <Badge color={`${item.badge === "Done" ? "success" : "primary"}`}>{item.badge}</Badge>
        <h3>{item.title}</h3>
        <div className='d-flex'>
          <Image width={20} height={20} className='img-20 me-1 rounded-circle' src={`${ImagePath}/${item.img}`} alt='images' />
          <div className='flex-grow-1'>
            <p>{item.sites}</p>
          </div>
        </div>
        <p>{item.desc}</p>
        <ProjectDetails item={item} />
        <ProjectCustomers item={item} />
        <div className='project-status mt-4'>
          <div className='d-flex mb-0'>
            <p>{item.progress}% </p>
            <div className='text-end flex-grow-1'>
              <span>{Done}</span>
            </div>
          </div>
          <Progress className='sm-progress-bar' color={item.progress === "100" ? "success" : "primary"} value={item.progress} style={{ height: "5px" }} />
        </div>
      </div>
    </Col>
  );
};

export default ProjectCommon;
