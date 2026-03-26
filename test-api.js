import axios from 'axios';

async function test() {
  const rs = await axios.get('https://dramabox.sansekai.my.id/api/dramabox/trending');
  console.log(typeof rs.data, Array.isArray(rs.data), Object.keys(rs.data));
}
test();
