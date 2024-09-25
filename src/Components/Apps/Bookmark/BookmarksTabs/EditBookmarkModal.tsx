import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { EditBookmark } from "@/utils/Constant";
import EditBookmarkModalForm from "./EditBookmarkModalForm";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { AddNewBookMarkInterFace } from "@/Types/Apps/BookmarkTypes";
import { setEditModal, setEditRow, updateBookMark } from "@/Redux/Reducer/BookmarkTabSlice";

const EditBookmarkModal = () => {
  const { editRow, editModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddNewBookMarkInterFace>();

  useEffect(() => {
    if (editRow) {
      setValue("url", editRow.website_url || "");
      setValue("title", editRow.title || "");
      setValue("desc", editRow.desc || "");
    }
  }, [editRow, setValue]);

  const editToggle = () => {
    dispatch(setEditModal());
    dispatch(setEditRow({}));
  };

  const Updatenewbookmark = (id: number | undefined, data: AddNewBookMarkInterFace) => {
    dispatch(updateBookMark({ id: id, data: data }));
  };

  const updateBookMarkData: SubmitHandler<AddNewBookMarkInterFace> = (data) => {
    dispatch(setEditModal());
    Updatenewbookmark(editRow?.id, data);
  };
  return (
    <Modal isOpen={editModal} toggle={editToggle} size='lg'>
      <ModalHeader toggle={editToggle}>
        <h3>{EditBookmark}</h3>
      </ModalHeader>
      <ModalBody>
        <EditBookmarkModalForm errors={errors} register={register} handleSubmit={handleSubmit} editToggle={editToggle} updateBookMarkData={updateBookMarkData} />
      </ModalBody>
    </Modal>
  );
};

export default EditBookmarkModal;
