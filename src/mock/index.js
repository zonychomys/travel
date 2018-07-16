import Mock from 'mockjs'
import homeMock from './data/home'

Mock.mock('/homeFeeds', 'get', homeMock.homeFeeds)

export default Mock
