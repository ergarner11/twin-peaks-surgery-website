import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../footer";
import Navbar from "../navbar";

function Page({ children, ...props }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Helmet>
      <div className="page">
        <Navbar {...props} />
        <div
          className={`d-flex flex-column flex-grow-1 background-gray p-0 ${props.className}`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Page;
