import Mock from 'mockjs'

export default {
  detailInfo () {
    let sightName = Mock.Random.ctitle(5, 10)
    let bannerImg = Mock.Random.image('600x330')
    let gallaryImgs = []
    let categoryList = []
    for (let i = 0; i < 4; i++) {
      let gallaryImg = Mock.Random.image('800x800')
      gallaryImgs.push(gallaryImg)
    }
    for (let i = 0; i < 4; i++) {
      let category = {
        title: Mock.Random.ctitle(5, 8),
        children: [
          {
            title: Mock.Random.ctitle(5, 8),
            children: [
              {
                title: Mock.Random.ctitle(5, 8)
              }
            ]
          }
        ]
      }
      categoryList.push(category)
    }
    return {
      'ret': true,
      'data': {
        'sightName': sightName,
        'bannerImg': bannerImg,
        'gallaryImgs': gallaryImgs,
        'categoryList': categoryList
      }
    }
  }
}
