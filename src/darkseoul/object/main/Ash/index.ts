import darkseoul from '../../..'

const WIDTH = 32
const HEIGHT = 56

const Ash = darkseoul.createCharacter('하얀 잿빛의 여인', {
  imgUrl: '/assets/object/main/Ash/sprite.png',
  spriteInfoMap: {
    default: {
      up: {
        areaList: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 3, w: WIDTH, h: HEIGHT })),
        collisionArea: { x: 0, y: 40, w: 32, h: 16 }
      },
      down: {
        areaList: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: 0, w: WIDTH, h: HEIGHT })),
        collisionArea: { x: 0, y: 40, w: 32, h: 16 }
      },
      left: {
        areaList: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT, w: WIDTH, h: HEIGHT })),
        collisionArea: { x: 0, y: 40, w: 32, h: 16 }
      },
      right: {
        areaList: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 2, w: WIDTH, h: HEIGHT })),
        collisionArea: { x: 0, y: 40, w: 32, h: 16 }
      }
    }
  }
})

export default Ash
