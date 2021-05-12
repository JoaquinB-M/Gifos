const API = 'https://api.giphy.com/v1/';
const APIKEY = '14PBjLFlkg7jRGnEiS0J2Uy22ym41y89';

const getData = (url) => {
    const result = fetch(url)
    .then(response => response.json())
    .then(data => data)

    return result
}

const getGifos = async(q) => {
    const url = `${API}gifs/search?api_key=${APIKEY}&q=${q}&limit=12`;
    const result = await getData(url)
    return result
}

const getSearchList = async(q) => {
    const url = `${API}gifs/search/tags?api_key=${APIKEY}&q=${q}&limit=6`;
    const result = await getData(url)
    return result
}

const Gifos = {
    getGifs: (q) => getGifos(q),
    getAutoComplete: (q) => getSearchList(q)
}

export default Gifos


