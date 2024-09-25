import { Displayheading, Displayheadings } from "@/utils/Constant";
import { CardHeader } from "reactstrap";

const CardHeaderDisplay = () => {
  return (
    <CardHeader>
      <h3 className="mb-0">{Displayheading}</h3>
      <p className="f-m-light mt-1">
        {" Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a"}
        <mark>{Displayheadings}</mark>
        {"—a larger, slightly more opinionated heading style."}
      </p>
    </CardHeader>
  );
};

export default CardHeaderDisplay;
