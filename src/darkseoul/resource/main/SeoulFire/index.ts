import { IObject } from 'iyagi/object'

const WIDTH = 32
const HEIGHT = 44

const SeoulFire = new IObject({
  name: '서울의 불',
  image: {
    url: '/assets/resource/main/SeoulFire/sprite.png'
  },
  motions: {
    default: {
      down: {
        frames: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: 0, w: WIDTH, h: HEIGHT })),
        hitbox: { x: 0, y: 12, w: 32, h: 32 }
      }
    },
    unlit: {
      down: {
        frames: [{ x: 0, y: HEIGHT, w: WIDTH, h: HEIGHT }],
        hitbox: { x: 0, y: 12, w: 32, h: 32 }
      }
    },
    unlitWithoutTheSword: {
      down: {
        frames: [{ x: WIDTH, y: HEIGHT, w: WIDTH, h: HEIGHT }],
        hitbox: { x: 0, y: 12, w: 32, h: 32 }
      }
    }
  }
})

export default SeoulFire
