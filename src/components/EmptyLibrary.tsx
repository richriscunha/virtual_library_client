import React, {FunctionComponent} from "react";

export const EmptyLibraryMessage = "You don't have any books, click the button to add one.";

const EmptyLibrary: FunctionComponent = () => {
  return (
    <div>
      <p>{EmptyLibraryMessage}</p>
    </div>
  );
};

export default EmptyLibrary;
