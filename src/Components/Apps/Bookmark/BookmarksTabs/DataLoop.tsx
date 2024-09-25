import { Card, Col, Row } from 'reactstrap';
import { Href } from '@/utils/Constant';
import SweetAlert from "sweetalert2";
import DesciptionData from './DesciptionData';
import NoBookmarksFoundComponent from './NoBookmarksFoundComponent';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { BookMarkData } from '@/Types/Apps/BookmarkTypes';
import { setBookmark, setEditModal, setEditRow, setRemoveBookmark } from '@/Redux/Reducer/BookmarkTabSlice';
import Image from 'next/image';
import { ImagePath } from '@/Constant';

const DataLoop = () => {
  const { bookmark } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  const addToFavourites = (data: BookMarkData) => {
    if (data.fillStar === false) {
      const newBookMarkData = bookmark.map((item) => (item.id === data.id ? { ...item, fillStar: true } : item));
      dispatch(setBookmark(newBookMarkData));
    } else {
      const newBookMarkData = bookmark.map((item) => (item.id === data.id ? { ...item, fillStar: false } : item));
      dispatch(setBookmark(newBookMarkData));
    }
  };

  const onHandleClick = (data: BookMarkData) => {
    console.log(data,"data")
    dispatch(setEditModal());
    dispatch(setEditRow(data));
  };

  const removeFromBookmark = (bookmarkId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(setRemoveBookmark(bookmarkId));
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };
  return (
    <Row id="bookmarkData">
      {bookmark.length > 0 ? (
        bookmark.map((data, index) => (
          <Col xxl={3} md={4} key={index} className="col-ed-4">
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <Image className="img-fluid" src={`${ImagePath}/${data.image}`} alt="image" width={292} height={194} />
                <div className={`favourite-icon favourite_0 ${data.fillStar ? "favourite" : ""}`} onClick={() => addToFavourites(data)}>
                  <a href={Href}>
                    <i className="fa fa-star"></i>
                  </a>
                </div>
                <DesciptionData data={data} onHandleClick={onHandleClick} removeFrombookmark={removeFromBookmark} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <NoBookmarksFoundComponent />
      )}
    </Row>
  )
}

export default DataLoop