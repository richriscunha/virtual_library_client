import React, {FunctionComponent} from "react";

import {generateColorPair} from "../../utils/color";
import {BookContainer} from "./styles";

type BookProps = {
  title: string;
};

const Book: FunctionComponent<BookProps> = ({title, ...props}) => {
  const [foreground, background] = generateColorPair();

  return (
    <BookContainer {...props} foreground={foreground} background={background}>
      <p className="title">{title}</p>
      <div className="actions">
        <div className="individual-actions">
          <button className="edit" type="button">
            Edit
          </button>
          <button className="delete" type="button">
            Delete
          </button>
        </div>
      </div>
    </BookContainer>
  );
};

export default Book;
