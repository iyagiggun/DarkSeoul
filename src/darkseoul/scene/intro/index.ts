import darkseoul from '../..'
import CEO from '../../object/office/character/CEO'
import { createTiles } from './map'

const tiles = createTiles()

const tiles1D = tiles.flatMap(i => i)

const intro = darkseoul.createScene('intro', [...tiles1D, CEO])

export default intro
