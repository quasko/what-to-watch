import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  return <Main promo={props.promo} />;
};

App.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default App;
