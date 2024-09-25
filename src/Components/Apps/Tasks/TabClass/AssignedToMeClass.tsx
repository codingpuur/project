import { Card, CardBody, CardHeader, Table } from 'reactstrap'
import { Href, Print } from '@/utils/Constant'
import { Link2, MoreHorizontal, Printer, Trash2 } from 'react-feather'
import { AssignPropsType } from '@/Types/Apps/TasksTypes'
import { useAppSelector } from '@/Redux/Hooks'
import Link from 'next/link'

const AssignedToMeClass:React.FC<AssignPropsType> = ({ title }) => {
  const {allTasks} = useAppSelector((state)=>state.tasks)
  return (
    <Card className="mb-0">
        <CardHeader className="d-flex">
          <h3 className='mb-0 f-w-600' >{title}</h3>
          <Link href={Href}>
            <Printer className="me-2" />{Print}
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          <div className="taskadd">
            <div className="table-responsive">
              <Table>
                <tbody>
                  { allTasks.map((data, id) =>(
                        <tr key={id}>
                          <td>
                            <h3 className= 'task_title_0'>{data.title}</h3>
                            <p  className= 'project_name_0'>{data.collection}</p>
                          </td>
                          <td>
                            <p className= 'task_desc_0'  >{data.description}</p>
                          </td>
                          <td>
                            <Link className="me-2" href={Href}><Link2 /></Link>
                            <Link href={Href}><MoreHorizontal /></Link>
                          </td>
                          <td>
                            <Link href={Href}>
                              <Trash2 />
                            </Link>
                          </td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
  )
}

export default AssignedToMeClass