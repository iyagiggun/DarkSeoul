// import { createCharacter } from 'iyagi/dist/object/character';

import { Character } from '../../object/character'

const UNIT = 64
const hitbox = { x: 16, y: 50, w: 32, h: 14 }

const CrestfallenWarrior = new Character({
  name: '김맴꺽',
  image: {
    url: '/assets/character/CrestfallenWarrior/sprite.png'
  },
  motions: {
    default: {
      hitbox,
      up: {
        frames: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 8, w: UNIT, h: UNIT }))
      },
      down: {
        frames: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 10, w: UNIT, h: UNIT }))
      },
      left: {
        frames: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 9, w: UNIT, h: UNIT }))
      },
      right: {
        frames: new Array(9)
          .fill(null)
          .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 11, w: UNIT, h: UNIT }))
      }
    },
    bite: {
      hitbox,
      up: {
        frames: [
          { x: UNIT * 1, y: UNIT * 0, w: UNIT, h: UNIT },
          { x: UNIT * 5, y: UNIT * 0, w: UNIT, h: UNIT },
          { x: UNIT * 1, y: UNIT * 0, w: UNIT, h: UNIT }
        ]
      },
      down: {
        frames: [
          { x: UNIT * 1, y: UNIT * 2, w: UNIT, h: UNIT },
          { x: UNIT * 5, y: UNIT * 2, w: UNIT, h: UNIT },
          { x: UNIT * 1, y: UNIT * 2, w: UNIT, h: UNIT }
        ]
      },
      left: {
        frames: [
          { x: UNIT * 1, y: UNIT * 1, w: UNIT, h: UNIT },
          { x: UNIT * 5, y: UNIT * 1, w: UNIT, h: UNIT },
          { x: UNIT * 1, y: UNIT * 1, w: UNIT, h: UNIT }
        ]
      },
      right: {
        frames: [
          { x: UNIT * 1, y: UNIT * 3, w: UNIT, h: UNIT },
          { x: UNIT * 5, y: UNIT * 3, w: UNIT, h: UNIT },
          { x: UNIT * 1, y: UNIT * 3, w: UNIT, h: UNIT }
        ]
      },
      loop: false
    }
  }
})

export default CrestfallenWarrior
