import React, {FunctionComponent} from "react";

import {generateColorPair} from "../../utils/color";
import {BookContainer} from "./styles";

type BookProps = {
  title: string;
  handleOnDelete: (title: string) => Promise<void>;
};

const Book: FunctionComponent<BookProps> = ({title, handleOnDelete}) => {
  const [foreground, background] = generateColorPair();

  return (
    <BookContainer foreground={foreground} background={background}>
      <p className="title">{title}</p>
      <div className="actions">
        <div className="individual-actions">
          <button className="edit" type="button">
            Edit
          </button>
          <button className="delete" type="button" onClick={() => handleOnDelete(title)}>
            Delete
          </button>
        </div>
      </div>
    </BookContainer>
  );
};

export default Book;
