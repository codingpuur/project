import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather'
import { Collection, Href, Title } from '@/utils/Constant'
import { FavDesciptionDataProp } from '@/Types/Apps/BookmarkTypes';

const FavDesciptionData:React.FC<FavDesciptionDataProp> = ({ myBookData}) => {
    const { website_url,desc } = myBookData;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h3 className="title_0">{Title}</h3>
        <p className="weburl_0">{website_url}</p>
        <div className="hover-block">
          <ul className="flex-row">
            <li><Link to={Href}><Edit2 /></Link></li>
            <li><Link to={Href}><Link /></Link></li>
            <li><Link to={Href}><Share2 /></Link></li>
            <li><Link to={Href}><Trash2 /></Link></li>
            <li className="pull-right text-end"><Link to={Href}><Tag /></Link></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_0">{desc}</p>
          <span className="collection_0">{Collection}</span>
        </div>
      </div>
    </div>
  )
}

export default FavDesciptionData