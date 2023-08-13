import darkseoul from '../../..'

const WIDTH = 32
const HEIGHT = 44

const SeoulFire = darkseoul.create_object({
  name: '서울의 불',
  sprite_url: '/assets/object/main/SeoulFire/sprite.png',
  sprite_info_map: {
    default: {
      down: {
        area_list: new Array(4)
          .fill(null)
          .map((_, idx) => ({ x: WIDTH * idx, y: 0, w: WIDTH, h: HEIGHT })),
        collision_area: { x: 0, y: 12, w: 32, h: 32 }
      }
    },
    unlit: {
      down: {
        area_list: [{ x: 0, y: HEIGHT, w: WIDTH, h: HEIGHT }],
        collision_area: { x: 0, y: 12, w: 32, h: 32 }
      }
    },
    unlitWithoutTheSword: {
      down: {
        area_list: [{ x: WIDTH, y: HEIGHT, w: WIDTH, h: HEIGHT }],
        collision_area: { x: 0, y: 12, w: 32, h: 32 }
      }
    }
  }
})

export default SeoulFire
