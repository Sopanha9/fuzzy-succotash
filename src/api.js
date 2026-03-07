import axios from 'axios';

const BASE_URL = 'https://dramabox.sansekai.my.id/api/dramabox';

export const fetchTrending = async () => {
    const res = await axios.get(`${BASE_URL}/trending`);
    return res.data;
};

export const fetchLatest = async () => {
    const res = await axios.get(`${BASE_URL}/latest`);
    return res.data;
};

export const fetchForYou = async () => {
    const res = await axios.get(`${BASE_URL}/foryou`);
    return res.data;
};

export const fetchVIP = async () => {
    const res = await axios.get(`${BASE_URL}/vip`);
    if (res.data.columnVoList && res.data.columnVoList.length > 0) {
        return res.data.columnVoList[0].bookList || [];
    }
    return Array.isArray(res.data) ? res.data : [];
};

export const fetchDubIndo = async (classify = 'terbaru', page = 1) => {
    const res = await axios.get(`${BASE_URL}/dubindo`, { params: { classify, page } });
    return res.data;
};

export const searchDrama = async (query) => {
    const res = await axios.get(`${BASE_URL}/search`, { params: { query } });
    return res.data;
};

export const fetchDetail = async (bookId) => {
    const res = await axios.get(`${BASE_URL}/detail`, { params: { bookId } });
    return res.data;
};

export const fetchEpisodes = async (bookId) => {
    const res = await axios.get(`${BASE_URL}/allepisode`, { params: { bookId } });
    return res.data;
};
