import { CardHeader } from "reactstrap";
import SearchBar from "./SearchBar";
import FileContentBody from "./FileContentBody";
import { useAppSelector } from "@/Redux/Hooks";
import SearchNotFoundClass from "./SearchNotFoundClass";
import { Content } from "./Content";

const FileContent = () => {
  const { myFile, searchTerm } = useAppSelector((state) => state.fileManager);

  const fileList = myFile.filter((data) => {
    if (searchTerm == null) return data;
    if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) return data;
  });

  return (
    <>
      <CardHeader>
        <div className='d-md-flex d-sm-block'>
          <SearchBar />
          <Content />
        </div>
      </CardHeader>

      {fileList.length ? <FileContentBody fileList={fileList} /> : <SearchNotFoundClass word='File' />}
    </>
  );
};

export default FileContent;
