import darkseoul from '../../../..'

const UNIT = 64
const COLLISION_AREA = { x: 16, y: 50, w: 32, h: 14 }

export default darkseoul.create_character({
  name: 'CEO',
  img_url: '/assets/object/office/character/CEO/sprite.png',
  sprite_info_map: {
    default: {
      up: {
        area_list: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 8, w: UNIT, h: UNIT })),
        collision_area: COLLISION_AREA
      },
      down: {
        area_list: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 10, w: UNIT, h: UNIT })),
        collision_area: COLLISION_AREA
      },
      left: {
        area_list: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 9, w: UNIT, h: UNIT })),
        collision_area: COLLISION_AREA
      },
      right: {
        area_list: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 11, w: UNIT, h: UNIT })),
        collision_area: COLLISION_AREA
      }
    }
  }
})
