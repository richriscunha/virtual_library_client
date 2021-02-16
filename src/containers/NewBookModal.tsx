import React, {FunctionComponent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import Modal from "../components/Modal";
import {addBook, showNewBookModal, toggleShowNewBookModal} from "../state/slices/library";
import {saveNewBook} from "../api/library";

type NewBookFormInput = {
  title: string;
};

const NewBookModal: FunctionComponent = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector(showNewBookModal);

  const {register, handleSubmit, errors, setError} = useForm<NewBookFormInput>();

  const onSubmit = async ({title}: NewBookFormInput) => {
    try {
      await saveNewBook(title);
      dispatch(addBook(title));
    } catch (error) {
      setError("title", {message: "This book already exists."});
      console.error(error);
    }
  };

  const handleOnClose = () => {
    dispatch(toggleShowNewBookModal());
  };

  if (!displayModal) {
    return null;
  }

  return (
    <Modal title="Add new book" onAction={() => handleSubmit(onSubmit)()} onClose={handleOnClose}>
      <form>
        <div>
          <label>Book title:</label>
        </div>
        <input name="title" ref={register({required: true})} />
        <div>
          {errors.title && errors.title.type === "required" && <span>This field is required!</span>}
          {errors.title && errors.title.type !== "required" && <span>{errors.title.message}</span>}
        </div>
      </form>
    </Modal>
  );
};

export default NewBookModal;
