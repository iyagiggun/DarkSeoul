import type IObject from 'iyagi/object'
import ICharacter from 'iyagi/object/character'
import IStatus, { IStatusBarBasic } from 'iyagi/object/character/status'

type IObjectCreated = ReturnType<typeof IObject.create>
type ICharacterParameter = Parameters<typeof ICharacter.create>[0]

interface CharacterParameter extends ICharacterParameter {
}

const DEFAULT_STATUS = {
  hp: 100,
  hpMax: 100,
  mp: 100,
  mpMax: 100
}

type StatusType = typeof DEFAULT_STATUS

const Character = {
  create: (p: CharacterParameter) => {
    const ic = ICharacter.create({
      ...p
    })

    const is = IStatus.create(DEFAULT_STATUS)

    is.on('change', ({ before, after }) => {
      IStatusBarBasic.show(ic.container, {
        key: 'hp',
        before: before.hp,
        after: after.hp,
        max: before.hpMax,
        color: '#a81b2e'
      })
    })

    return {
      ...ic,
      status: is
    }
  }
}

interface CharacterClass extends ReturnType<typeof ICharacter.create> {}

class CharacterClass {
  public status: ReturnType<typeof IStatus.create<StatusType>>

  constructor (p: CharacterParameter) {
    const ic = ICharacter.create(p)
    this.status = IStatus.create(DEFAULT_STATUS)

    Object.assign(this, ic)
  }
}

type CharacterType = ReturnType<typeof Character.create> | CharacterClass

interface Damage {
  physical: number
}

const DamageCalculator = {
  hit: (damage: Damage, hit: CharacterType) => {
    const status = hit.status
    const hp = status.get().hp - damage.physical
    status.set({ hp })
  }
}

export { Character, CharacterClass, DamageCalculator, type CharacterType, type IObjectCreated }
