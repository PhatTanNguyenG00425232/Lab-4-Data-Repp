import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content></Content> } />
        <Route path="/read" element={<Header></Header>} />
        <Route path="/create" element={<Footer></Footer>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
