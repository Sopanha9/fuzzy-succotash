import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetail, fetchEpisodes } from '../api';
import { motion } from 'framer-motion';
import { Play, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  const { bookId } = useParams();
  const [drama, setDrama] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeEp, setActiveEp] = useState(null);

  // Helper to extract best video URL from episode data
  const getVideoUrl = (ep) => {
    if (!ep || !ep.cdnList) return '';
    const paths = ep.cdnList[0]?.videoPathList;
    if (!paths) return '';
    const target = paths.find(p => p.quality === 720) || paths[0];
    return target?.videoPath || '';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detailData, episData] = await Promise.all([
          fetchDetail(bookId),
          fetchEpisodes(bookId).catch(() => []) // episData takes time
        ]);
        setDrama(detailData);
        setEpisodes(episData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [bookId]);

  if (loading || !drama) {
    return (
      <div className="loader-wrapper">
        <div className="spin spinner"></div>
      </div>
    );
  }

  return (
    <div className="detail-page page-container">
      <Link to="/" className="back-btn glass btn">
        <ArrowLeft size={18} /> Back
      </Link>

      <div className="hero-detail">
        <motion.div 
          className="poster-container glass"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src={drama.coverWap} alt={drama.bookName} />
        </motion.div>
        
        <motion.div 
          className="info-container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="detail-title">{drama.bookName}</h1>
          
          <div className="tags-container">
            {drama.tags?.map((t, i) => (
              <span key={i} className="tag glass">{t}</span>
            ))}
          </div>

          <div className="meta-stats">
            <span className="stat">Episodes: {drama.chapterCount}</span>
            <span className="stat">Shelf: {drama.shelfTime?.split(' ')[0]}</span>
          </div>

          <p className="introduction">{drama.introduction}</p>

          <button 
            className="btn btn-primary play-btn"
            onClick={() => {
               if (episodes.length > 0) setActiveEp(episodes[0]);
            }}
            disabled={!episodes.length}
          >
            <Play fill="currentColor" size={20} /> {episodes.length ? 'Start Watching' : 'Loading Episodes...'}
          </button>
        </motion.div>
      </div>

      {activeEp && (
        <motion.div 
          className="player-section glass"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="player-header">
            <h2>{activeEp.chapterName}</h2>
            <button className="close-btn" onClick={() => setActiveEp(null)}>Close Player</button>
          </div>
          <div className="video-wrapper">
            <video 
              src={getVideoUrl(activeEp)} 
              controls 
              autoPlay 
              poster={activeEp.chapterImg}
              className="drama-video"
            />
          </div>
        </motion.div>
      )}

      {episodes && episodes.length > 0 && (
        <motion.div 
          className="episodes-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Episodes</h2>
          <div className="episode-grid">
            {episodes.map((ep, i) => (
              <div 
                key={ep.chapterId || i} 
                className={`episode-card glass ${activeEp?.chapterId === ep.chapterId ? 'active-ep' : ''}`}
                onClick={() => {
                  setActiveEp(ep);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                <div className="ep-num">Ep {ep.chapterName?.replace(/[^0-9]/g, '') || i + 1}</div>
                {ep.isCharge ? <span className="vip-locked" style={{fontSize: '0.7rem', color: '#f59e0b', marginTop: '4px'}}>VIP</span> : <div className="play-ep"><Play size={20}/></div>}
              </div>
            ))}
          </div>
        </motion.div>
      )}
      {!episodes.length && !loading && (
        <div className="loading-episodes">Loading episodes...</div>
      )}
    </div>
  );
}
