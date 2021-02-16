import React, {FunctionComponent} from "react";

type EmptyLibraryProps = {
  onClick: VoidFunction;
};

const EmptyLibrary: FunctionComponent<EmptyLibraryProps> = ({onClick}) => {
  return (
    <div>
      <p onClick={onClick}>Add a book</p>
    </div>
  );
};

export default EmptyLibrary;
