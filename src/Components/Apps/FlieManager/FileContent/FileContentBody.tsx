import { CardBody } from "reactstrap";
import { QuickAccess } from "@/utils/Constant";
import { quickAccessData } from "@/Data/Apps/FileManager/FileManagerData";
import Folders from "./Folders";
import Files from "./Files";
import { FileMainContentPropsType } from "@/Types/Apps/FileManager";
import { useAppSelector } from "@/Redux/Hooks";

const FileContentBody: React.FC<FileMainContentPropsType> = ({ fileList }) => {
  const { searchTerm } = useAppSelector((state) => state.fileManager);
  return (
    <CardBody className='file-manager'>
      {!searchTerm && (
        <>
          <h5>{QuickAccess} </h5>
          <ul className='quick-file d-flex flex-row simple-list'>
            {quickAccessData.map((data, index) => (
              <li key={index}>
                <div className='quick-box'>
                  <i className={`fa fa-${data.icons} font-${data.color}`} />
                </div>
                <h6>{data.title}</h6>
              </li>
            ))}
          </ul>
          <Folders />
        </>
      )}
      <Files myFile={fileList} />
    </CardBody>
  );
};

export default FileContentBody;
