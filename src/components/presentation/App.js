import React from "react";
import List from "../container/List";
import Form from "../container/Form";

const App = () => (
  <div className="row-mt-4">
    <div className="col-md-4 offset-md-1">
      <h1> Comments </h1>
      <List />
      <Form />
    </div>
  </div>
);

export default App;
