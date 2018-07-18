import Mock from 'mockjs'
import homeMock from './data/home'
import cityMock from './data/city'

Mock.mock('/homeFeeds', 'get', homeMock.homeFeeds)
Mock.mock('/cityFeeds', 'get', cityMock.cityFeeds)

export default Mock
