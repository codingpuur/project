import { Input, Table } from "reactstrap";
import { MaximumAge, MinimumAge } from "@/utils/Constant";
import { ChangeEvent, useEffect, useState } from "react";
import { filterDataTableData } from "@/Data/Tables/DataTables/APITablesData";
const TableSearchBar = ({ setFirst }: any) => {
  const [value, setValue] = useState({ minValue: 0, maxValue: 100 });

  useEffect(() => {
    const filteredDatas = filterDataTableData.filter((item) => {
      const age = item.age;
      const { maxValue, minValue } = value;
      if (minValue && maxValue) {
        return age >= minValue && age <= maxValue;
      } else {
        return filterDataTableData;
      }
    });
    setFirst(filteredDatas);
  }, [value]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: parseInt(event.target.value, 10) });
  };

  return (
    <div className='table-responsive dataTables_wrapper me-0'>
      <Table>
        <tbody className='dataTables_filter'>
          <tr>
            <td>{MinimumAge}</td>
            <td>
              <Input onChange={onChange} type='search' name='minValue' />
            </td>
          </tr>
          <tr>
            <td>{MaximumAge}</td>
            <td>
              <Input onChange={onChange} type='search' name='maxValue' />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableSearchBar;
