import React, {FunctionComponent} from "react";

import {ApplicationContainer, LibraryContainer, LibraryTitle} from "./styles";

const ApplicationLayout: FunctionComponent = ({children}) => {
  return (
    <ApplicationContainer>
      <LibraryTitle>
        <p>Virtual Library</p>
      </LibraryTitle>
      <LibraryContainer>{children}</LibraryContainer>
    </ApplicationContainer>
  );
};

export default ApplicationLayout;
