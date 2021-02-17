import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import Book from "./";

const title = "Book Title";
const onEdit = jest.fn();
const onDelete = jest.fn();

describe("renders a book", () => {
  beforeEach(() => {});

  test("should render a book cover", () => {
    render(<Book title={title} handleOnEdit={onEdit} handleOnDelete={onDelete} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("should call the handleOnEdit prop when edit button is clicked", () => {
    render(<Book title={title} handleOnEdit={onEdit} handleOnDelete={onDelete} />);
    fireEvent.click(screen.getByText("Edit"));
    expect(onEdit).toHaveBeenCalled();
  });

  test("should call the handleOnDelete prop when delete button is clicked", () => {
    render(<Book title={title} handleOnEdit={onEdit} handleOnDelete={onDelete} />);
    fireEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalled();
  });
});
