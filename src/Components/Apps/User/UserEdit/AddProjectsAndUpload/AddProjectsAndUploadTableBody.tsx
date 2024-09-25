import Link from "next/link";
import { addProjectsAndUploadData } from "@/Data/Apps/User/UsersProfileData";
import { Delete, Edit, Href, Update } from "@/utils/Constant";

const AddProjectsAndUploadTableBody = () => {
  return (
    <tbody>
      {addProjectsAndUploadData.map((data, index) => (
        <tr key={index}>
          <td>
            <Link className='text-inherit' href={Href}>
              {"Untrammelled Prevents"}
            </Link>
          </td>
          <td>{data.date}</td>
          <td>
            <span className={`status-icon ${data.statusClass}`} /> {data.status}
          </td>
          <td>{data.price}</td>
          <td className='text-end'>
            <Link className='btn btn-primary btn-sm' href={Href}>
              <i className='fa fa-pencil' /> {Edit}
            </Link>
            <Link className='btn btn-transparent btn-sm' href={Href}>
              <i className='fa fa-link' /> {Update}
            </Link>
            <Link className='btn btn-danger btn-sm' href={Href}>
              <i className='fa fa-trash' /> {Delete}
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AddProjectsAndUploadTableBody;
