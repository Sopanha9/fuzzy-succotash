import { Link, useNavigate } from 'react-router-dom';
import { Search, Film } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <nav className="navbar glass-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Film className="logo-icon" />
          <span className="logo-text">DramaBox</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          {/* We can add more links later if needed */}
        </div>
        <form className="search-bar" onSubmit={handleSearch}>
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search dramas..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}
