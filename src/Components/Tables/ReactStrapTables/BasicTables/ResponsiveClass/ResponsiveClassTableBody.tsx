import { responsiveTableData } from "@/Data/Tables/ReactStrapTables/ReactStrapTablesData"

const ResponsiveClassTableBody = () => {
  return (
    <tbody>
      {responsiveTableData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.task}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.assign}</td>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td className={`${item.status === "Pending" ? "text-danger" : "text-success"}`}>
            {item.status}
          </td>
          <td>{item.progress}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default ResponsiveClassTableBody