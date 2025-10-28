import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Portfolio from './pages/Portfolio';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/coppola-entertainment' : '/';
  
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

