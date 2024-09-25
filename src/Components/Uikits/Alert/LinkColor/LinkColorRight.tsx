import  { Fragment } from "react";
import { Alert, Col } from "reactstrap";
import { Href } from "@/utils/Constant";
import { alertColorData } from "@/Data/Uikits/Alert/AlertData";
import Link from "next/link";

const LinkColorRight = () => {
  return (
    <Col xl={6}>
      {alertColorData &&
        alertColorData.slice(3).map((item, index) => (
          <Fragment key={index}>
            <p className="mb-0">{item.title} Alert</p>
            <Alert color={item.color} className="dark">
              <p>
                This is a 
                <Link className={`alert-link ${item.color === "light" ? "text-dark" : "text-white"}`} href={Href}>
                   {item.color} alert{" "}
                </Link>{" "}
                with an example link.Check it out.
              </p>
            </Alert>
          </Fragment>
        ))}
    </Col>
  );
};

export default LinkColorRight;
