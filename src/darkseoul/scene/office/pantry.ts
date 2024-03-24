import { devtools } from 'iyagi/devtools'
import { IScene } from 'iyagi/scene'
import { getOfficePantryTiles, getOfficePantryWalls } from './map/pantry'
import { INTRO } from '../keys'
import CrestfallenWarrior from '../../character/CrestfallenWarrior'
import { RyuDahee, RyuDaheeController } from '../../resource/main/RyuDahee'

const tiles = getOfficePantryTiles()
const walls = getOfficePantryWalls()

const OfficePantry = new IScene({
  name: '탕비실',
  objects: [
    ...tiles,
    ...walls,
    RyuDahee,
    CrestfallenWarrior
  ],
  take: async () => {
    CrestfallenWarrior.positionAt({ x: 100, y: 200 })
    walls.filter((tile) => tile.name.includes('office:wall:e:')).forEach((tile) => {
      devtools.colorize(tile)
    })
    RyuDaheeController.control()
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 100000)
    })
    return INTRO
  }
})

export default OfficePantry
