import { Href } from '@/utils/Constant';
import Link from 'next/link';
import { List, ListInlineItem } from 'reactstrap';

const CallIcons = () => {
    const callIconsData = ["video-camera", "volume", "user"];
  return (
    <div className="call-icons">
      <List type='inline' className="flex-row d-inline-flex">
        {callIconsData.map((data, index) => (
          <ListInlineItem key={index}>
            <Link href={Href}>
              <i className={`icon-${data}`} />
            </Link>
          </ListInlineItem>
        ))}
      </List>
    </div>
  )
}

export default CallIcons