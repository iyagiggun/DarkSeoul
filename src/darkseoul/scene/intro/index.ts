import darkseoul from '../..'
import Ash from '../../object/main/Ash'
import RyuDahee from '../../object/main/RyuDahee'
import SeoulFire from '../../object/main/SeoulFire'
import CEO from '../../object/office/character/CEO'
import { createTiles, createWalls, getPartitions } from './map'

const tiles = createTiles()

const tiles1D = tiles.flatMap(i => i)
const walls = createWalls()
const partitions = getPartitions()

Ash.set_position(396, 82)
Ash.change_direction('left')
SeoulFire.set_position(360, 64)
RyuDahee.set_position(32, 200)

const objectList = [
  ...tiles1D,
  ...walls,
  ...partitions,
  CEO,
  Ash,
  SeoulFire,
  RyuDahee
]

const intro = darkseoul.create_scene({
  name: 'intro',
  object_list: objectList
})

const pr1 = async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.error('pr1')
      resolve()
    }, 2000)
  })
}
const pr2 = async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.error('pr2')
      resolve()
    }, 2000)
  })
}
const pr3 = async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.error('pr3')
      resolve()
    }, 1000)
  })
}

intro.add_take_list([
  pr1,
  pr2,
  pr3
])

export default intro
