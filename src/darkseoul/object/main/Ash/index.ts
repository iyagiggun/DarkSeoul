import { Character } from '../../character'

const WIDTH = 32
const HEIGHT = 56

const Ash = new Character({
  name: '하얀 잿빛의 여인',
  photoMap: {
    default: '/assets/object/main/Ash/photo.png'
  },
  image: '/assets/object/main/Ash/sprite.png',
  motions: {
    default: {
      hitbox: { x: 0, y: 40, w: 32, h: 16 },
      up: {
        frames: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 3, w: WIDTH, h: HEIGHT }))
      },
      down: {
        frames: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: 0, w: WIDTH, h: HEIGHT }))
      },
      left: {
        frames: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT, w: WIDTH, h: HEIGHT }))
      },
      right: {
        frames: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 2, w: WIDTH, h: HEIGHT }))
      }
    }
  }
})

export default Ash
