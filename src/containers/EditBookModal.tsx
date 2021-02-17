import React, {FunctionComponent} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {editBook} from "../api/library";
import Modal from "../components/Modal";
import {
  getEditBookTitle,
  showEditBookModal,
  toggleEditNewBookModal,
  updateBook,
} from "../state/slices/library";

type EditBookFormInput = {
  original_book: string;
  new_book: string;
};

const EditBookModal: FunctionComponent = () => {
  const dispatch = useDispatch();

  const displayModal = useSelector(showEditBookModal);
  const originalBookTitle = useSelector(getEditBookTitle);

  const {register, handleSubmit, setError, errors} = useForm<EditBookFormInput>();

  const onSubmit = async ({original_book, new_book}: EditBookFormInput) => {
    const payload = {original_book, new_book};

    try {
      await editBook(payload);
      dispatch(updateBook(payload));
    } catch (error) {
      setError("new_book", {message: "This book already exists."});
      console.error(error);
    }
  };

  const handleOnClose = () => {
    dispatch(toggleEditNewBookModal());
  };

  if (!displayModal) {
    return null;
  }

  return (
    <Modal title="Edit book" onAction={() => handleSubmit(onSubmit)()} onClose={handleOnClose}>
      <form>
        <div>
          <div>
            <label>Original book title:</label>
          </div>
          <input
            name="original_book"
            defaultValue={originalBookTitle}
            ref={register({required: true})}
            readOnly={true}
          />
        </div>
        <div>
          <div>
            <label>Book title:</label>
          </div>
          <input name="new_book" ref={register({required: true})} />
          <div>
            {errors["new_book"] && errors["new_book"].type === "required" && (
              <span>This field is required!</span>
            )}
            {errors["new_book"] && errors["new_book"].type !== "required" && (
              <span>{errors["new_book"].message}</span>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditBookModal;
