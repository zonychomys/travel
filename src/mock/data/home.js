import Mock from 'mockjs'

export default {
  homeFeeds: function () {
    let swiperList = []
    let iconList = []
    let recommendList = []
    let weekendList = []
    for (let i = 0; i < 4; i++) {
      let newSwiper = {
        id: Mock.Random.natural(),
        imgUrl: Mock.Random.image('900x240')
      }
      swiperList.push(newSwiper)
    }
    for (let i = 0; i < 10; i++) {
      let newIcon = {
        id: Mock.Random.natural(),
        imgUrl: Mock.Random.image('165x165'),
        desc: Mock.Random.ctitle(2, 4)
      }
      iconList.push(newIcon)
    }
    for (let i = 0; i < 5; i++) {
      let newRecommend = {
        id: Mock.Random.natural(),
        imgUrl: Mock.Random.image('150x150'),
        title: Mock.Random.ctitle(2, 5),
        desc: Mock.Random.cparagraph(1, 3)
      }
      recommendList.push(newRecommend)
    }
    for (let i = 0; i < 5; i++) {
      let newWeekend = {
        id: Mock.Random.natural(),
        imgUrl: Mock.Random.image('640x214'),
        title: Mock.Random.ctitle(2, 5),
        desc: Mock.Random.cparagraph(1, 3)
      }
      weekendList.push(newWeekend)
    }
    return {
      'ret': true,
      'data': {
        'swiperList': swiperList,
        'iconList': iconList,
        'recommendList': recommendList,
        'weekendList': weekendList
      }
    }
  }
}
