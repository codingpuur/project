import { ImagePath } from "@/Constant";
import { SocialAppgallery } from "@/Data/Apps/SearchResult/SearchResultData";
import { Href } from "@/utils/Constant";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

const SocialGalleryImageDescription = () => {
  return (
    <Gallery>
      {SocialAppgallery.map((item, index) => (
        <figure key={index} className='col-xl-3 col-sm-6 box-col-25'>
          <Item original={`${ImagePath}/${item.image}`} width='1024' height='768' caption='images'>
            {({ ref, open }) => (
              <Link href={Href} onClick={open}>
                <img height={500} width={500} className='img-thumbnail' ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item.image}`} alt='thumbnail' />
                <div className='caption'>
                  <h4>{item.title}</h4>
                  <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                </div>
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  );
};

export default SocialGalleryImageDescription;
