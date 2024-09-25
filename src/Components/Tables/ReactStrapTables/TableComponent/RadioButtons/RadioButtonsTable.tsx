import { Input, Label, Table } from 'reactstrap'
import BasicRadioButtons from './BasicRadioButtons'
import InlineCheckbox from './InlineCheckbox'
import { radioBoxTableData } from '@/Data/Tables/ReactStrapTables/TableComponentData'

const RadioButtonsTable = () => {
  return (
    <Table bordered className="radio-first-col-width">
        <tbody>
            <BasicRadioButtons />
            {radioBoxTableData.map((data,index)=>(
                <tr key={index}>
                    <td>{data.title}</td>
                    <td>
                        <div className="radio radio-primary">
                            <Input id={`radio-${data.title}`} type="radio" name="radio1"color={data.color} defaultChecked={data.check} disabled={data.disabled}/>
                            <Label for={`radio-${data.title}`}>{data.tableColData}</Label>
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

export default RadioButtonsTable