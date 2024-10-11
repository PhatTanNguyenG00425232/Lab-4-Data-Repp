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
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content></Content> } />
        <Route path="/read" element={<Read></Read>} />
        <Route path="/footer" element={<Footer></Footer>} />
        <Route path="/movie" element={<Movie></Movie>}/>
      </Routes>
    </Router>
  );
}

export default App;
