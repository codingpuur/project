import { ImagePath } from '@/Constant'
import { scrollableListData } from '@/Data/Uikits/Lists/ListsData'
import Image from 'next/image'
import { ListGroupItem } from 'reactstrap'

const ScrollableListBody = () => {
  return (
    <>
    {scrollableListData &&
        scrollableListData.map((item, index) => (
          <ListGroupItem className="list-group-item-action list-hover-primary" key={index}
          >
            <div className="list-wrapper gap-0">
              <Image className="list-img" src={`${ImagePath}/${item.img}`} alt="profile" width={100} height={100}/>
              <div className="list-content">
                <h6>{item.head}</h6>
                <p>{item.mail}</p>
                <small className="text-muted">{item.small}</small>
              </div>
            </div>
          </ListGroupItem>
        ))}
    </>
  )
}

export default ScrollableListBody