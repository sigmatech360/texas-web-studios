import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = (props) => {
  return (
    <>
      {/* <div className="d-flex flex-column" style={{minHeight: '100vh'}}> */}
      <div className="hidden-body">
      <Header />
      {/* <div className="flex-grow-1"> */}
      {props.children}
      {/* </div> */}
      <Footer />
      {/* </div> */}

      </div>
    </>
  );
};

export default DefaultLayout;
