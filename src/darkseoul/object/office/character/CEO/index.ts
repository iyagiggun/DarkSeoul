import darkseoul from '../../../..'

const WIDTH = 32
const HEIGHT = 56

export default darkseoul.createObject('CEO', {
  imgUrl: '/assets/object/office/character/CEO/sprite.png',
  spriteInfoMap: {
    default: {
      down: {
        areaList: new Array(4)
          .fill(null)
          .map((_, idx) => [WIDTH * idx, 0, WIDTH, HEIGHT])
      }
    }
  }
})
