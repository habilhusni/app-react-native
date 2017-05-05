import axios from 'axios';

import { GET_DATA_COLDPLAY }  from './constants.js';

export const fetchDataColdplay = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums')
    .then(res =>  dispatch(getDataColdplay(res.data.items)))
    .catch(err => { console.log(err)})
}

export const getDataColdplay = dataColdplay => ({
    type: GET_DATA_COLDPLAY,
    payload: dataColdplay
})
