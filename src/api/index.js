import axios from 'axios'

export const getHomeFeeds = params => { return axios.get('/homeFeeds') }
export const getCityFeeds = params => { return axios.get('/cityFeeds') }
