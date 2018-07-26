import Mock from 'mockjs'
import homeMock from './data/home'
import cityMock from './data/city'
import detailMock from './data/detail'

Mock.mock(/homeFeeds/, 'get', homeMock.homeFeeds)
Mock.mock(/cityFeeds/, 'get', cityMock.cityFeeds)
Mock.mock(/detailInfo/, 'get', detailMock.detailInfo)

export default Mock
