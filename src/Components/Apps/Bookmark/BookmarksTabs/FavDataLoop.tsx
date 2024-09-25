import { useEffect } from "react";
import { Card, Col, Row } from "reactstrap";
import { Href } from "@/utils/Constant";
import NoBookmarksFoundComponent from "./NoBookmarksFoundComponent";
import FavDesciptionData from "./FavDesciptionData";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setBookMarkList, setBookmark } from "@/Redux/Reducer/BookmarkTabSlice";
import { BookMarkData } from "@/Types/Apps/BookmarkTypes";
import Image from "next/image";
import Link from "next/link";
import { ImagePath } from "@/Constant";

const FavDataLoop = () => {
  const { bookmark, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updatedList = bookmark.filter((data) => data.fillStar === true);
    dispatch(setBookMarkList(updatedList));
  }, [bookmark, dispatch]);

  const removeFromFavorite = (item: BookMarkData) => {
    const updatedBookMark = bookmark.map((data) => (data.id === item.id ? { ...data, fillStar: false } : data));
    dispatch(setBookmark(updatedBookMark));
  };
  return (
    <Row>
      {bookMarkList.length > 0 ? (
        bookMarkList.map((myBookData: BookMarkData) => (
          <Col xxl={3} md={4} className='col-ed-4' key={myBookData.id}>
            <Card className='card-with-border bookmark-card o-hidden'>
              <div className='details-website'>
                <Image className='img-fluid' src={`${ImagePath}/${myBookData.image}`} alt='Image' width={292} height={194}/>
                <div className={`favourite-icon favourite_0 ${myBookData.fillStar ? "favourite" : ""}`}>
                  <Link href={Href}>
                    <i className='fa fa-star' onClick={() => removeFromFavorite(myBookData)}></i>
                  </Link>
                </div>
                <FavDesciptionData myBookData={myBookData} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <NoBookmarksFoundComponent />
      )}
    </Row>
  );
};

export default FavDataLoop;
