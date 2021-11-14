import React from 'react';
//Rounting --> using router v5
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//styles
import { GlobalStyle } from './GlobalStyle';
//Components
import  Header  from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie'
import NotFound from './components/NotFound';
import Login from './components/Login';
//context
import UserProvider from './context';

const App = () => (
  <>
    <Router> 
      <UserProvider>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/:movieId'>
            <Movie />
          </Route>
          <Route exact path='/*'>
            <NotFound />
          </Route>
        </Switch>
        <GlobalStyle />
      </UserProvider>
    </Router>
  </>
)


//if use router v6:
// <Routes>
//   <Route path='/' element={<Home />} />
//   <Route path='/:movieId' element={<Movie />} />
//   <Route path='/*' element={<NotFound />} /> if page have double slash then not found
// <Routes>

export default App;
