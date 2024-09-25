import { useAppSelector } from "@/Redux/Hooks";
import { Folder } from "@/utils/Constant";
import { Fragment } from "react";

const Folders = () => {
  const { myFile } = useAppSelector((state) => state.fileManager);
  return (
    <>
       <h5 className="mt-4">{Folder}</h5>
        <ul className="folder mt-2">
          {myFile.map((item, index) => (
            <Fragment key={index}>
              {item.title && (
                <li className="folder-box" key={index}>
                  <div className="d-block">
                    <i className={item.folderClass}></i>
                    <i className="fa fa-ellipsis-v me-0 f-14 ellips"></i>
                    <div className="mt-3">
                      <h6>{item.title}</h6>
                      <p>
                        {item.folderSize}
                        <span className="pull-right">
                          <i className="fa fa-clock-o me-1"></i>
                          {item.modify}
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
    </>
  );
};

export default Folders;
