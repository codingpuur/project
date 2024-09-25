import { Printer } from "react-feather";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Href, NoTaskDueToday, Print } from "@/utils/Constant";
import { EmptyPropsType } from "@/Types/Apps/TasksTypes";
import Link from "next/link";

const EmptyTaskClass: React.FC<EmptyPropsType> = ({ title }) => {
  return (
    <Card className='mb-0'>
      <CardHeader className='d-flex'>
        <h3 className='mb-0'>{title}</h3>
        <Link href={Href}>
          <Printer className='me-2' />
          {Print}
        </Link>
      </CardHeader>
      <CardBody>
        <div className='details-bookmark text-center'>
          <div className='no-favourite'>
            <span>{NoTaskDueToday}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EmptyTaskClass;
