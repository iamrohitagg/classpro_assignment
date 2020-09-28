import React from "react";
import "./App.css";
import Page from "./components/Page";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className="App col-10 mx-auto">
        <Page />
      </div>
    </>
  );
}

export default App;
