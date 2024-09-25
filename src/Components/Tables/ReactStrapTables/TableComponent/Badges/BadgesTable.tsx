import { badgesTableData } from "@/Data/Tables/ReactStrapTables/TableComponentData";
import { Badge, Table } from "reactstrap";

const BadgesTable = () => {
  return (
    <Table bordered>
      <tbody>
        {badgesTableData.map((data, index) => (
          <tr key={index}>
            <td className={data.tdClassName}>{data.title}</td>
            <td className='w-50 {tableItem.class}'>
              <Badge color='primary' className={data.badgeClass}>
                {data.badgeClass && data.badgeClass ? (
                  <>
                    <i className='fa fa-paperclip fa-lg'></i>
                    <span className='f-14'>{data.tableColData}</span>
                  </>
                ) : (
                  <>{data.tableColData}</>
                )}
              </Badge>
            </td>
            <td>
              <span dangerouslySetInnerHTML={{ __html: data.details }} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BadgesTable;
