import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const promo = {
  name: `test`,
  genre: `testGenre`,
  date: `01.01.2021`,
};

ReactDOM.render(<App promo={promo} />, document.querySelector(`#root`));
