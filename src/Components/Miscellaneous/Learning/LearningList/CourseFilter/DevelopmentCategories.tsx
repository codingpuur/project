import { Development, Href } from "@/utils/Constant";
import { developmentCategoriesData } from "@/Data/Learning/LearningData";
import { Badge } from "reactstrap";
import Link from "next/link";

const DevelopmentCategories = () => {
  return (
    <div className='categories pt-0'>
      <div className='learning-header'>
        <span className='f-w-600'>{Development}</span>
      </div>
      <ul>
        {developmentCategoriesData.map((data, index) => (
          <li key={index}>
            <Link href={Href}>{data.DevelopmentHeading}</Link>
            <Badge color='primary' className='pull-right'>
              {data.badgeNumber}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentCategories;
