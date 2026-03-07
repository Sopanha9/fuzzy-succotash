import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DramaCard from './DramaCard';
import './DramaSection.css';

export default function DramaSection({ title, dramas, isLoading }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="drama-section loader-section">
        <h2 className="section-title skeleton-text">Loading...</h2>
        <div className="drama-scroller skeleton-scroller">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      </div>
    );
  }

  if (!dramas || !Array.isArray(dramas) || dramas.length === 0) return null;

  return (
    <section className="drama-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="scroll-controls">
          <button className="scroll-btn" onClick={() => scroll('left')}><ChevronLeft size={24}/></button>
          <button className="scroll-btn" onClick={() => scroll('right')}><ChevronRight size={24}/></button>
        </div>
      </div>
      <div className="drama-scroller-wrapper">
        <div className="drama-scroller" ref={scrollRef}>
          {dramas.map((drama, idx) => (
            <DramaCard key={drama.bookId || idx} drama={drama} />
          ))}
        </div>
      </div>
    </section>
  );
}
