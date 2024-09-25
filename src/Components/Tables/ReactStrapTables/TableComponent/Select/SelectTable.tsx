import { Input, Table } from 'reactstrap'
import LargeSelectMode from './LargeSelectMode'
import ExampleMultipleSelect from './ExampleMultipleSelect'
import { selectBoxTableData } from '@/Data/Tables/ReactStrapTables/TableComponentData'

const SelectTable = () => {
  return (
    <Table bordered className="checkbox-td-width">
        <tbody>
            {selectBoxTableData.map((data,index)=>(
                <tr key={index}>
                    <td>{data.title}</td>
                    <td className="w-50">
                        <Input type="select" id="exampleFormControlSelect45" defaultValue="1" disabled={data.disabled}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </td>
                    <td>
                        <span dangerouslySetInnerHTML={{__html:data.details}}></span>
                    </td>
                </tr>
            ))}
            <LargeSelectMode />
            <ExampleMultipleSelect />
        </tbody>
    </Table>
  )
}

export default SelectTable