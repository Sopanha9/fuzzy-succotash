import { useState, useEffect } from 'react';
import { fetchForYou, fetchTrending, fetchLatest, fetchVIP, fetchDubIndo } from '../api';
import DramaSection from '../components/DramaSection';
import { motion } from 'framer-motion';

export default function Home() {
  const [data, setData] = useState({
    forYou: [],
    trending: [],
    latest: [],
    vip: [],
    dubIndo: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [forYouRes, trendingRes, latestRes, vipRes, dubIndoRes] = await Promise.all([
          fetchForYou().catch(() => []),
          fetchTrending().catch(() => []),
          fetchLatest().catch(() => []),
          fetchVIP().catch(() => []),
          fetchDubIndo().catch(() => [])
        ]);

        setData({
          forYou: forYouRes,
          trending: trendingRes,
          latest: latestRes,
          vip: vipRes,
          dubIndo: dubIndoRes
        });
      } catch (error) {
        console.error("Error fetching home data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DramaSection title="For You" dramas={data.forYou} isLoading={loading} />
      <DramaSection title="Trending Now" dramas={data.trending} isLoading={loading} />
      <DramaSection title="Latest Releases" dramas={data.latest} isLoading={loading} />
      <DramaSection title="VIP Exclusives" dramas={data.vip} isLoading={loading} />
      <DramaSection title="Dub Indo Terbaru" dramas={data.dubIndo} isLoading={loading} />
    </motion.div>
  );
}
