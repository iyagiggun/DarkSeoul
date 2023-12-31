import IScene from 'iyagi/scene'
import Ash from '../../object/main/Ash'
import RyuDahee from '../../object/main/RyuDahee'
import SeoulFire from '../../object/main/SeoulFire'
import CEO, { ceoBite } from '../../object/office/character/CEO'
import { createEscapeTiles, createTiles, createWalls, feInOffice, getPartitions } from './map'
import { IBasicTracker } from 'iyagi/nai'
import Debuger from 'iyagi/debugger'
import talk from './talk'

const tiles = createTiles()
const exitTiles = createEscapeTiles()
const tiles1D = tiles.flatMap(i => i)
const walls = createWalls()
const partitions = getPartitions()

Ash.setPosition(396, 82)
Ash.setDirection('left')
SeoulFire.setPosition(360, 64)
RyuDahee.setPosition(32, 200)

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
  name: 'intro',
  objectList,
  tileList: [...tiles1D, ...exitTiles],
  take: async () => {
    console.error('intro')
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

    await new Promise<void>((resolve) => {
      const onExitTileIn = () => {
        console.error('resolve')
        resolve()
      }

      exitTiles.forEach((tile) => {
        Debuger.colorize(tile, { key: onExitTileIn })
        tile.on('in', () => {
          onExitTileIn()
        })
      })
    })

    return null
  }
})

export default intro
