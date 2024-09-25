import { Href, MyPortfolioTitle } from "@/utils/Constant";
import { Gallery, Item } from "react-photoswipe-gallery";
import { galleryImagePath } from "@/Data/Apps/SearchResult/SearchResultData";
import Link from "next/link";
import { ImagePath } from "@/Constant";

const GalleryImageDescription = () => {
  return (
    <Gallery>
      {galleryImagePath.slice(0, 8).map((item, index) => (
        <figure key={index} className='col-xl-3 col-sm-6 box-col-25'>
          <Item original={`${ImagePath}/${item}`} width='1024' height='768' caption='images'>
            {({ ref, open }) => (
              <Link href={Href} onClick={open}>
                <img height={500} width={500} className='img-thumbnail' ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt='thumbnail' />
                <div className='caption'>
                  <h4>{MyPortfolioTitle}</h4>
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

export default GalleryImageDescription;
