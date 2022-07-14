import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Footer from "../Footer";
import "./styles.css";

const Layout = (props) => {
  const { children, topbarProps = {} } = props;
  return (
    <div className="layout_container">
      <div className="header">
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <div className="left">
          <Sidebar />
        </div>
        <div className="top-right">
          <Topbar {...topbarProps} />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;


