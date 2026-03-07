import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchDrama } from '../api';
import DramaCard from '../components/DramaCard';
import { motion } from 'framer-motion';
import './Search.css';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await searchDrama(query);
        setResults(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="page-container search-page">
      <motion.h1 
        className="search-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Search Results for <span className="highlight">"{query}"</span>
      </motion.h1>

      {loading ? (
        <div className="loader-wrapper">
          <div className="spin spinner"></div>
        </div>
      ) : results.length > 0 ? (
        <motion.div 
          className="search-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {results.map((drama, idx) => (
            <DramaCard key={drama.bookId || idx} drama={drama} />
          ))}
        </motion.div>
      ) : (
        <div className="no-results">
          <p>No dramas found matching your query.</p>
        </div>
      )}
    </div>
  );
}
