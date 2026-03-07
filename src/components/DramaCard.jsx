import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import './DramaCard.css';

export default function DramaCard({ drama }) {
  const id = drama.bookId;
  const title = drama.bookName || drama.title;
  const image = drama.coverWap || drama.coverUrl || drama.image;
  const epCount = drama.chapterCount || drama.episodeCount;
  
  return (
    <motion.div 
      className="drama-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/drama/${id}`}>
        <div className="card-image-wrapper">
          <img src={image} alt={title} loading="lazy" />
          <div className="card-overlay">
            <div className="play-icon">
              <Play fill="currentColor" size={24} />
            </div>
          </div>
          {drama.corner?.name && <span className="vip-badge" style={{ background: drama.corner.color || 'auto' }}>{drama.corner.name}</span>}
        </div>
        <div className="card-content">
          <h3 className="card-title truncate">{title}</h3>
          <p className="card-meta">
            {drama.playCount && <span className="score">▶ {drama.playCount}</span>}
            {epCount && <span>Ep {epCount}</span>}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
