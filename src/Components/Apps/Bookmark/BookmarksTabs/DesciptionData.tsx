import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import { Href } from '@/utils/Constant';
import { DescriptionBookMarkPropsType } from '@/Types/Apps/BookmarkTypes';

const DesciptionData:React.FC<DescriptionBookMarkPropsType> = ({ data, onHandleClick, removeFrombookmark,}) => {
  const { title, website_url, id } = data;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h3 className="title_0">{title}</h3>
        <p className="weburl_0">{website_url}</p>
        <div className="hover-block">
          <ul className="d-block">
            <li><a href={Href} onClick={() => onHandleClick(data)}><Edit2 /></a></li>
            <li><a href={Href}><Link /></a></li>
            <li><a href={Href}><Share2 /></a></li>
            <li><a href={Href} onClick={() => removeFrombookmark(id)}><Trash2 /></a></li>
            <li className="pull-right text-end"><a href={Href}><Tag /></a></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_0">{data.desc}</p>
          <span className="collection_0">{data.collection}</span>
        </div>
      </div>
    </div>
  )
}

export default DesciptionData