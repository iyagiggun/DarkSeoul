import { devtools } from 'iyagi/devtools'
import { IBasicTracker } from 'iyagi/nai'
import { IScene } from 'iyagi/scene'
import Ash from '../../resource/main/Ash'
import { RyuDahee, RyuDaheeController } from '../../resource/main/RyuDahee'
import SeoulFire from '../../resource/main/SeoulFire'
import CEO, { ceoBite } from '../../resource/office/character/CEO'
import { TITLE } from '../keys'
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
  ...tiles1D,
  ...exitTiles,
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

    RyuDaheeController.control()

    return await new Promise((resolve) => {
      const onExitTileIn = () => {
        resolve(TITLE)
      }

      exitTiles.forEach((tile) => {
        devtools.colorize(tile, { key: onExitTileIn })
        tile.event.in = onExitTileIn
      })
    })
  }
})

export default intro
