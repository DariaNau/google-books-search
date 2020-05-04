import React from 'react';
import './App.css';
import SearchView from './pages/Search'
import Saved from './pages/Saved'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={["/", "/books"]}>
          <SearchView />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

{/* <Router>
<div>
  <StoreProvider>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/favorites" component={FavoritesList} />
      <Route exact path="/posts/:id" component={Detail} />
      <Route component={NoMatch} />
    </Switch>
  </StoreProvider>
</div>
</Router> */}
