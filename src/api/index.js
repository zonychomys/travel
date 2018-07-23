import axios from 'axios'

export const getHomeFeeds = params => { return axios.get('/homeFeeds', { params }) }
export const getCityFeeds = params => { return axios.get('/cityFeeds') }
