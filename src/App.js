import React from "react";
import Routes from "./routes";
import HttpResponse from "./utils/http/httpResponse";

const App = () => {
  return (
    <>
      <HttpResponse />
      <Routes />
    </>
  );
};

export default App;
