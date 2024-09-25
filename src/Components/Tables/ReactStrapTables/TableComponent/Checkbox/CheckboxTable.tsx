import { Input, Label, Table } from 'reactstrap'
import BasicCheckbox from './BasicCheckbox'
import InlineCheckbox from './InlineCheckbox'
import { checkboxTableData } from '@/Data/Tables/ReactStrapTables/TableComponentData'

const CheckboxTable = () => {
  return (
    <Table bordered className="checkbox-td-width">
        <tbody>
            <BasicCheckbox />
            {checkboxTableData.map((data,index)=>(
                <tr key={index}>
                    <td>{data.title}</td>
                    <td className="w-50">
                        <div className={`checkbox ${data.class}`}>
                            <Input id={data.title} type="checkbox" defaultChecked={data.check ? true : false} disabled={data.disabled} />
                            <Label for={data.title}>{data.tableColData}</Label>
                        </div>
                    </td>
                    <td>
                        <span dangerouslySetInnerHTML={{__html:data.details}} />
                    </td>
                </tr>
            ))}
            <InlineCheckbox />
        </tbody>
    </Table>
  )
}

export default CheckboxTable