import axios from 'axios';

async function testAll() {
  const urls = [
    'https://dramabox.sansekai.my.id/api/dramabox/foryou',
    'https://dramabox.sansekai.my.id/api/dramabox/trending',
    'https://dramabox.sansekai.my.id/api/dramabox/latest',
    'https://dramabox.sansekai.my.id/api/dramabox/vip',
    'https://dramabox.sansekai.my.id/api/dramabox/dubindo?classify=terbaru'
  ];

  for (let url of urls) {
    try {
      const res = await axios.get(url);
      console.log(url.split('/').pop(), '-> isArray:', Array.isArray(res.data));
    } catch(e) {
      console.log(url.split('/').pop(), '-> error:', e.message);
    }
  }
}
testAll();
