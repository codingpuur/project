import { CardHeader } from "reactstrap";
import { Fragment } from "react";
type ObjectType = {
    text?: string;
    code?: string;
  };
  type PropsTypes = {
    headClass?: string;
    title: string;
    subTitle?: ObjectType[];
    subTitle2?:ObjectType[];
  };

const CommonHeader = ({ headClass, title, subTitle ,subTitle2}: PropsTypes) => {
  return (
    <CardHeader className={headClass}>
      <h3 className="mb-0">{title}</h3>
      {subTitle && (
        <p className="f-m-light mt-1">
          {subTitle.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>}
            </Fragment>
          ))}
        </p>
      )}{subTitle2 && (
        <p className="f-m-light mt-1">
          {subTitle2.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>}
            </Fragment>
          ))}
        </p>
      )}
    </CardHeader>
  );
};

export default CommonHeader;