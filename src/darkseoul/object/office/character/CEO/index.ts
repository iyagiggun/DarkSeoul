// import { createCharacter } from 'iyagi/dist/object/character';

import { Character } from '../../../character'

const UNIT = 64
const collision = { x: 16, y: 50, w: 32, h: 14 }

const CEO = Character.create({
  name: 'CEO',
  sprite: {
    url: '/assets/object/office/character/CEO/sprite.png',
    actions: {
      default: {
        up: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 8, w: UNIT, h: UNIT })),
          collision
        },
        down: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 10, w: UNIT, h: UNIT })),
          collision
        },
        left: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 9, w: UNIT, h: UNIT })),
          collision
        },
        right: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 11, w: UNIT, h: UNIT })),
          collision
        }
      },
      bite: {
        up: {
          areaList: [
            { x: UNIT * 1, y: UNIT * 0, w: UNIT, h: UNIT },
            { x: UNIT * 5, y: UNIT * 0, w: UNIT, h: UNIT },
            { x: UNIT * 1, y: UNIT * 0, w: UNIT, h: UNIT }
          ],
          collision
        },
        down: {
          areaList: [
            { x: UNIT * 1, y: UNIT * 2, w: UNIT, h: UNIT },
            { x: UNIT * 5, y: UNIT * 2, w: UNIT, h: UNIT },
            { x: UNIT * 1, y: UNIT * 2, w: UNIT, h: UNIT }
          ],
          collision
        },
        left: {
          areaList: [
            { x: UNIT * 1, y: UNIT * 1, w: UNIT, h: UNIT },
            { x: UNIT * 5, y: UNIT * 1, w: UNIT, h: UNIT },
            { x: UNIT * 1, y: UNIT * 1, w: UNIT, h: UNIT }
          ],
          collision
        },
        right: {
          areaList: [
            { x: UNIT * 1, y: UNIT * 3, w: UNIT, h: UNIT },
            { x: UNIT * 5, y: UNIT * 3, w: UNIT, h: UNIT },
            { x: UNIT * 1, y: UNIT * 3, w: UNIT, h: UNIT }
          ],
          collision
        },
        loop: false,
        onAction: (frameId) => {
          console.debug(frameId)
        }
      }
    }
  }
})

export const ceoBite = () => {
  CEO.action('bite')
  CEO.play()
}

export default CEO
