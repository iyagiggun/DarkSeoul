// import { createCharacter } from 'iyagi/dist/object/character';

import { type IScene } from 'iyagi/scene'
import { Character, DamageCalculator } from '../../../character'

const UNIT = 64
const hitbox = { x: 16, y: 50, w: 32, h: 14 }

const CEO = new Character({
  name: 'CEO',
  image: {
    url: '/assets/resource/office/character/CEO/sprite.png'
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

const BiteDamage = {
  physical: 30
}

export const ceoBite = (scene: IScene) => {
  CEO.change('bite')
  CEO.play({
    onFrameChange: (frameIdx) => {
      if (frameIdx !== 2) {
        return
      }
      const { x: cX, y: cY } = CEO.position()
      const { x, y, w, h } = CEO.area()

      const dir = CEO.direction()

      const hitBox = (() => {
        switch (dir) {
          case 'up':
            return { x: cX - 5, y: y - 5, w: 10, h: 10 }
          case 'down':
            return { x: cX - 5, y: y + h, w: 10, h: 10 }
          case 'left':
            return { x: x - 5, y: cY - 5, w: 10, h: 10 }
          case 'right':
            return { x: x + w, y: cY - 5, w: 10, h: 10 }
        }
      })()

      scene.objects.overlapped(hitBox)
        .forEach((object: any) => { // TODO:: any
          if (!('status' in object) || object.position().z !== CEO.position().z) {
            return
          }
          DamageCalculator.hit(BiteDamage, object)
        })
    }
  })
}

export default CEO
