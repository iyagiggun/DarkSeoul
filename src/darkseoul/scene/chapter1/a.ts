import { devtools } from 'iyagi/devtools'
import { IScene } from 'iyagi/scene'
import { getOfficePantryTiles, getOfficePantryWalls } from '../../location/office/pantry'

const tiles = getOfficePantryTiles()
const walls = getOfficePantryWalls()

const Chapter1A = new IScene({
  name: '챕터 1-A',
  tiles,
  objects: [...walls],
  take: async () => {
    walls.filter((tile) => tile.name.includes('office:wall:e:')).forEach((tile) => {
      devtools.colorize(tile)
    })
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 100000)
    })
    return null
  }
})

export default Chapter1A
