import './App.css';
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from './components/Header';
import Loading from './components/Loading'

const { useRef } = React;
const HomePage = React.lazy(() => import('./containers/HomePage'));
const SearchPage = React.lazy(() => import('./containers/SearchPage'));
const BookmarkPage = React.lazy(() => import('./containers/BookmarkPage'));

function App() {
  const childRef = useRef();
  const handleHeaderSearch = (search) => {
    childRef.current.getSearchTextFromHeader(search)
  }
  
  return (
    <Router>
      <div className="container">
        <Header handleSearch={handleHeaderSearch} />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/search">
              <SearchPage ref={childRef} />
            </Route>
            <Route path="/bookmark">
              <BookmarkPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
