import darkseoul from '../../..'

const WIDTH = 32
const HEIGHT = 56

const Ash = darkseoul.create_character({
  name: '하얀 잿빛의 여인',
  photo_map: {
    default: '/assets/object/main/Ash/photo.png'
  },
  sprite_url: '/assets/object/main/Ash/sprite.png',
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

export default Ash
