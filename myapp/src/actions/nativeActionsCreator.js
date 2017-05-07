import axios from 'axios';

import { GET_DATA_COLDPLAY, GET_DATA_PAYUNGTEDUH, GET_DATA_EDSHEERAN, GET_DATA_ZAYN, GET_DATA_PARAMORE, GET_DATA_EMINEM, GET_DATA_REDJUMPSUIT, GET_DATA_BRUNOMARS, GET_DATA_TWENTYONE, GET_DATA_RAISA, GET_DATA_TULUS }  from './constants.js';

export const fetchDataColdplay = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums')
    .then(res =>  dispatch(getDataColdplay(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataPayungTeduh = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/2Ooa3TrmlskyBftzenv6xQ/albums')
    .then(res =>  dispatch(getDataPayungTeduh(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataEdSheeran = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V/albums')
    .then(res =>  dispatch(getDataEdSheeran(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataZayn = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/5ZsFI1h6hIdQRw2ti0hz81/albums')
    .then(res =>  dispatch(getDataZayn(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataParamore = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/74XFHRwlV6OrjEM0A2NCMF/albums')
    .then(res =>  dispatch(getDataParamore(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataEminem = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR/albums')
    .then(res =>  dispatch(getDataEminem(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataRedJumpsuit = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/1SImpQO0GbjRgvlwCcCtFo/albums')
    .then(res =>  dispatch(getDataRedJumpsuit(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataBrunoMars = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/albums')
    .then(res =>  dispatch(getDataBrunoMars(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataTwentyOne = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx/albums')
    .then(res =>  dispatch(getDataTwentyOne(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataRaisa = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/5OZXWMwDhlYBRvoOfcX0sk/albums')
    .then(res =>  dispatch(getDataRaisa(res.data.items)))
    .catch(err => { console.log(err)})
}

export const fetchDataTulus = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/2iDVt6mFbtbDEZG5ax0dTi/albums')
    .then(res =>  dispatch(getDataTulus(res.data.items)))
    .catch(err => { console.log(err)})
}

export const getDataColdplay = dataColdplay => ({
    type: GET_DATA_COLDPLAY,
    payload: dataColdplay
})

export const getDataPayungTeduh = dataPayungTeduh => ({
    type: GET_DATA_PAYUNGTEDUH,
    payload: dataPayungTeduh
})

export const getDataEdSheeran = dataEdSheeran => ({
    type: GET_DATA_EDSHEERAN,
    payload: dataEdSheeran
})

export const getDataZayn = dataZayn => ({
    type: GET_DATA_ZAYN,
    payload: dataZayn
})

export const getDataParamore = dataParamore => ({
    type: GET_DATA_PARAMORE,
    payload: dataParamore
})

export const getDataEminem = dataEminem => ({
    type: GET_DATA_EMINEM,
    payload: dataEminem
})

export const getDataRedJumpsuit = dataRedJumpsuit => ({
    type: GET_DATA_REDJUMPSUIT,
    payload: dataRedJumpsuit
})

export const getDataBrunoMars = dataBrunoMars => ({
    type: GET_DATA_BRUNOMARS,
    payload: dataBrunoMars
})

export const getDataTwentyOne = dataTwentyOne => ({
    type: GET_DATA_TWENTYONE,
    payload: dataTwentyOne
})

export const getDataRaisa = dataRaisa => ({
    type: GET_DATA_RAISA,
    payload: dataRaisa
})

export const getDataTulus = dataTulus => ({
    type: GET_DATA_TULUS,
    payload: dataTulus
})
