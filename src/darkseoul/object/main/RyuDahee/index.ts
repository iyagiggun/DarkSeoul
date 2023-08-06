import darkseoul from '../../..'

const WIDTH = 32
const HEIGHT = 56

const RyuDahee = darkseoul.create_character({
  name: '류다희',
  img_url: '/assets/object/main/RyuDahee/sprite.png',
  sprite_info_map: {
    default: {
      up: {
        area_list: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 3, w: WIDTH, h: HEIGHT })),
        collision_area: { x: 0, y: 40, w: 32, h: 16 }
      },
      down: {
        area_list: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: 0, w: WIDTH, h: HEIGHT })),
        collision_area: { x: 0, y: 40, w: 32, h: 16 }
      },
      left: {
        area_list: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT, w: WIDTH, h: HEIGHT })),
        collision_area: { x: 0, y: 40, w: 32, h: 16 }
      },
      right: {
        area_list: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 2, w: WIDTH, h: HEIGHT })),
        collision_area: { x: 0, y: 40, w: 32, h: 16 }
      }

    }
  }
})

export default RyuDahee
