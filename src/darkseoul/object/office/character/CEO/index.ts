// import { createCharacter } from 'iyagi/dist/object/character';

import Debugger from 'iyagi/debugger'
import type IScene from 'iyagi/scene'
import { Character, DamageCalculator, type CharacterType, type IObjectCreated } from '../../../character'

const UNIT = 64
const collision = { x: 16, y: 50, w: 32, h: 14 }

const CEO = Character.create({
  name: 'CEO',
  sprite: {
    url: '/assets/object/office/character/CEO/sprite.png',
    motions: {
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
        loop: false
      }
    }
  }
})

const BiteDamage = {
  physical: 30
}

export const ceoBite = (scene: ReturnType<typeof IScene.create>) => {
  CEO.changeMotion('bite')
  CEO.play({
    onFrameChange: (frameIdx) => {
      if (frameIdx !== 2) {
        return
      }
      const { x: cX, y: cY } = CEO.getCenterPosition()
      const { x, y, w, h } = CEO.getArea()

      const dir = CEO.getDirection()

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

      scene.getOverlappingObjectList(hitBox)
        .forEach((object: IObjectCreated | CharacterType) => {
          if (!('getStatus' in object) || object.getPosition().z !== CEO.getPosition().z) {
            return
          }
          DamageCalculator.hit(BiteDamage, object)
        })

      Debugger.showArea(scene, hitBox)
      Debugger.showArea(scene, CEO.getArea(), { color: '#0000ff' })
    }
  })
}

export default CEO
