import Mock from 'mockjs'
import pinyin from 'pinyin'

export default {
  cityFeeds: function () {
    let hotCities = []
    let cities = {}
    for (let i = 0; i < 5; i++) {
      let cityName = Mock.Random.city()
      let cityNameSpell = pinyin(cityName, { style: pinyin.STYLE_NORMAL }).join('')
      let newHotCity = {
        id: Mock.Random.natural(),
        spell: cityNameSpell,
        name: cityName
      }
      hotCities.push(newHotCity)
    }
    for (let i = 0; i < 26; i++) {
      let letter = String.fromCharCode(65 + i)
      let natural = Mock.Random.natural(5, 10)
      let letterCities = []
      for (let j = 0; j < natural; j++) {
        let newCity = {
          id: Mock.Random.natural(),
          spell: Mock.Random.word(5, 10),
          name: Mock.Random.city()
        }
        letterCities.push(newCity)
      }
      cities[letter] = letterCities
    }
    return {
      'ret': true,
      'data': {
        'hotCities': hotCities,
        'cities': cities
      }
    }
  }
}
