import React, {FunctionComponent} from "react";

import ApplicationLayout from "./layouts/ApplicationLayout";
import Bookshelf from "./containers/Bookshelf";

const App: FunctionComponent = () => (
  <ApplicationLayout>
    <Bookshelf />
  </ApplicationLayout>
);

export default App;
