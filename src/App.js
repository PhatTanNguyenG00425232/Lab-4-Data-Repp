import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Movie from './components/Movie';

function App() {
  return (
    <Router>
      {/* the navigation bar at the top of the app */}
      <NavigationBar />
      
      {/* routes for the application */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/home" element={<Content />} />
        
        {/* Route for the Read page*/}
        <Route path="/read" element={<Read />} />
        
        {/* Route for the Footer page*/}
        <Route path="/footer" element={<Footer />} />
        
        {/* Route for the Movie page*/}
        <Route path="/movie" element={<Movie />} />

        {/* Route for the Create page*/}
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
