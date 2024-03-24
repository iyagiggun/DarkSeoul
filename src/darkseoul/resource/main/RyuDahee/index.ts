// import ICharacter from 'iyagi/object/character';

import { Character } from '../../character'
import { IPlayerController } from 'iyagi/controller'

const WIDTH = 32
const HEIGHT = 56

const RyuDahee = new Character({
  name: '류다희',
  photoMap: {
    default: '/assets/resource/main/RyuDahee/photo.png'
  },
  image: {
    url: '/assets/resource/main/RyuDahee/sprite.png'
  },
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

const RyuDaheeController = new IPlayerController(RyuDahee)
RyuDaheeController.on('↓', () => {
}).on('→↓←↑', () => {
})

export { RyuDahee, RyuDaheeController }
