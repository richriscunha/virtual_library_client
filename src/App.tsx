import React, {FunctionComponent} from "react";
import Bookshelf from "./containers/Bookshelf";

import ApplicationLayout from "./layouts/ApplicationLayout";

const App: FunctionComponent = () => (
  <ApplicationLayout>
    <Bookshelf />
  </ApplicationLayout>
);

export default App;
