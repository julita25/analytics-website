import React from "react";
import "../styles/globals.css";
import { instanceOf } from "prop-types";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: instanceOf(Object).isRequired,
  pageProps: instanceOf(Object).isRequired

};

export default App;
