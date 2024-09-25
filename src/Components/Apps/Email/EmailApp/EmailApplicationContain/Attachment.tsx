import Image from "next/image";
import { Forward, Href, Reply, ReplyAll } from "@/utils/Constant";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import { List, ListInlineItem } from "reactstrap";

const Attachment = () => {
  return (
    <>
      <div className="attachment">
        <List className="flex-row justify-content-start">
          <ListInlineItem>
            <Image className="img-fluid" src={`${ImagePath}/email/1.jpg`} alt="image" height={80} width={80}/>
          </ListInlineItem>
          <ListInlineItem>
            <Image className="img-fluid" src={`${ImagePath}/email/2.jpg`} alt="image" height={80} width={80}/>
          </ListInlineItem>
          <ListInlineItem>
            <Image className="img-fluid" src={`${ImagePath}/email/3.jpg`} alt="image" height={80} width={80}/>
          </ListInlineItem>
        </List>
      </div>
      <hr />
      <div className="action-wrapper">
        <ul className="actions flex-row">
          <li>
            <Link className="text-muted" href={Href}>
                <i className="fa fa-reply me-2" />{Reply}
            </Link>
          </li>
          <li>
            <Link className="text-muted" href={Href}>
                <i className="fa fa-reply-all me-2" /> {ReplyAll}
            </Link>
          </li>
          <li>
            <Link className="text-muted" href={Href}>
                <i className="fa fa-share me-2" />
            </Link>{Forward}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Attachment;
