import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drama/:bookId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<div className="page-container" style={{textAlign:'center', marginTop:'5rem'}}><h2>404 - Page Not Found</h2><p style={{color:'var(--text-secondary)'}}>You might be trying to visit an API link directly on the frontend. Please navigate to the <Link to="/">Home Page</Link>.</p></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
