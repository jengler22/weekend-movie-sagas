import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../../Header/Header';

function App() {
  return (
    <div className="App">
     < Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
