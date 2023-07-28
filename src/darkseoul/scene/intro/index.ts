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

const objectList = [
  ...tiles1D,
  ...walls,
  ...partitions,
  CEO,
  Ash.setPos(396, 82).setDirection('left'),
  SeoulFire.setPos(360, 64),
  RyuDahee.setPos(32, 200)
]

const intro = darkseoul.createScene('intro', objectList)

export default intro
