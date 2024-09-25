import Link from "next/link";
import { ATTACHMENTS, DownloadAll, Href } from "@/utils/Constant";
import Attachment from "./Attachment";

const EmailContentBody = () => {
  return (
    <div className="email-wrapper">
      <p>{"Hello"}</p>
      <p>{"Dear Sir Good Morning,"}</p>
      <h3>{"Inquiry about our theme pages design."}</h3>
      <p className="m-b-20">
        {
          "Cion Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework, HTML5, CSS and JQuery.It has a huge collection of reusable UI components and integrated with latest jQuery plugins."
        }
      </p>
      <p>
        {
          "It can be used for all type of Web applications like custom admin panel, app backend, CMS or CRM. UI components and integrated with latest jQuery plugins. Tivo Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework."
        }
      </p>
      <hr />
      <div className="d-inline-block">
        <h4 className="text-muted">
          <i className="icofont icofont-clip" /> {ATTACHMENTS}
        </h4>
        <Link className="text-muted text-end right-download" href={Href}>
          <i className="fa fa-long-arrow-down me-2" />
          {DownloadAll}
        </Link>
        <div className="clearfix" />
      </div>
      <Attachment />
    </div>
  );
};

export default EmailContentBody;
