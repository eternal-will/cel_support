import React from "react";
import { Header, Footer } from "../components";

const AppWrap = (Component, idname) =>
  function HOC() {
    return (
      <div id={idname} className="app__container">
        <Header context={idname} />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <Footer />
      </div>
    );
  };

export default AppWrap;
