import { Gallery, Item } from "react-photoswipe-gallery";
import { galleryImagePath } from "@/Data/Gallary/GallaryGridData";
import { Href } from "@/utils/Constant";
import Link from "next/link";
import { ImagePath } from "@/Constant";

const GalleryImages = () => {
  return (
    <Gallery>
      {galleryImagePath.map((item, i) => (
        <figure className='col-xl-3 col-md-4 col-6' key={i}>
          <Item original={`${ImagePath}/${item}`} width='1600' height='950'>
            {({ ref, open }) => (
              <Link href={Href} onClick={open}>
                <img height={500} width={500} className='img-thumbnail' ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt='image' />
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  );
};

export default GalleryImages;
