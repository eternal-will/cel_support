import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
