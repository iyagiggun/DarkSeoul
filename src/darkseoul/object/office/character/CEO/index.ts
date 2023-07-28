import darkseoul from '../../../..'

const UNIT = 64
const COLLISION_AREA = { x: 16, y: 50, w: 32, h: 14 }

export default darkseoul.createCharacter('CEO', {
  imgUrl: '/assets/object/office/character/CEO/sprite.png',
  spriteInfoMap: {
    default: {
      up: {
        areaList: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 8, w: UNIT, h: UNIT })),
        collisionArea: COLLISION_AREA
      },
      down: {
        areaList: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 10, w: UNIT, h: UNIT })),
        collisionArea: COLLISION_AREA
      },
      left: {
        areaList: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 9, w: UNIT, h: UNIT })),
        collisionArea: COLLISION_AREA
      },
      right: {
        areaList: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 11, w: UNIT, h: UNIT })),
        collisionArea: COLLISION_AREA
      }
    }
  }
})
