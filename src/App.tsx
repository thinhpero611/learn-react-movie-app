import React from 'react';
//Rounting
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//styles
import { GlobalStyle } from './GlobalStyle';
//Components
import  Header  from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie'
import NotFound from './components/NotFound';

const App: React.FC = () => (
  <>
    <Router> 
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/:movieId'>
          <Movie />
        </Route>
        <Route exact path='/*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

export default App;
