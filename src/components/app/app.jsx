import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../../pages/main/main";
import MyList from "../../pages/my-list/my-list";
import SignIn from "../../pages/sign-in/sign-in";
import Film from "../../pages/film/film";
import AddReview from "../../pages/add-review/add-review";
import Player from "../../pages/player/player";
import NotFoundPage from "../../pages/not-found/not-found";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main promo={props.promo} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default App;
