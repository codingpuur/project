import { toolTipTriggersData } from "@/Data/Tables/ReactStrapTables/TableComponentData";
import { Button, Table, Tooltip } from "reactstrap";

const TooltipTriggersBody = () => {
  return (
    <Table bordered>
      <tbody>
        {toolTipTriggersData.map((data, index) => (
          <tr key={index}>
            <td>{data.title}</td>
            <td className='w-50'>
              <Button outline={data.outline} color={data.color} id={data.name}>
                {data.name}
              </Button>
              <Tooltip target={data.name} placement='right'>
                {data.tooltip}
              </Tooltip>
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

export default TooltipTriggersBody;
