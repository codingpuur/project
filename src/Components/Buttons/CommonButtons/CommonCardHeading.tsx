import { commonCardHeadingPropsType } from "@/Types/ButtonsType";
import { CardHeader } from "reactstrap";

const CommonCardHeading = ({ headingClassName, smallHeading, Heading, span, span2, bigHeadingClassName }: commonCardHeadingPropsType) => {
  return (
    <CardHeader className={`card-no-border pb-0 ${headingClassName ? headingClassName : ""}`}>
      {smallHeading ? <h3>{smallHeading}</h3> : <h4 className={bigHeadingClassName ? bigHeadingClassName : ""}>{Heading}</h4>}
      {span && <span dangerouslySetInnerHTML={{ __html: span }} />}
      {span2 && <span dangerouslySetInnerHTML={{ __html: span2 }} />}
    </CardHeader>
  );
};

export default CommonCardHeading;
