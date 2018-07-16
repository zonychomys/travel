import axios from 'axios'

export const getHomeFeeds = params => { return axios.get('/homeFeeds') }
