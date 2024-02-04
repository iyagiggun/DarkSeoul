import { devtools } from 'iyagi/devtools'
import { IBasicTracker } from 'iyagi/nai'
import { IScene } from 'iyagi/scene'
import Ash from '../../object/main/Ash'
import RyuDahee from '../../object/main/RyuDahee'
import SeoulFire from '../../object/main/SeoulFire'
import CEO, { ceoBite } from '../../object/office/character/CEO'
import { createEscapeTiles, createTiles, createWalls, feInOffice, getPartitions } from './map'
import talk from './talk'

const tiles = createTiles()
const exitTiles = createEscapeTiles()
const tiles1D = tiles.flatMap(i => i)
const walls = createWalls()
const partitions = getPartitions()

Ash.positionAt({ x: 396, y: 82 })
Ash.directTo('left')
SeoulFire.positionAt({ x: 360, y: 64 })
RyuDahee.positionAt({ x: 32, y: 200 })

const objectList = [
  ...walls,
  ...partitions,
  CEO,
  Ash,
  SeoulFire,
  RyuDahee,
  feInOffice
]

const intro = new IScene({
  name: '인트로',
  tiles: [...tiles1D, ...exitTiles],
  objects: objectList,
  take: async () => {
    await talk(intro)

    IBasicTracker.control({
      scene: intro,
      controlled: CEO,
      target: RyuDahee,
      onArrived: () => {
        ceoBite(intro)
      }
    })
    intro.control(RyuDahee)

    return await new Promise((resolve) => {
      const onExitTileIn = () => {
        resolve(null)
      }

      exitTiles.forEach((tile) => {
        devtools.colorize(tile, { key: onExitTileIn })
        tile.event.in = onExitTileIn
      })
    })
  }
})

export default intro
