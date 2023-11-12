import type IObject from 'iyagi/object'
import ICharacter from 'iyagi/object/character'

type Effect = 'POISON'

interface Status {
  hp: number
  mp: number
  affected: Effect[]
}

type IObjectCreated = ReturnType<typeof IObject.create>
type ICharacterParameter = Parameters<typeof ICharacter.create>[0]

interface CharacterParameter extends ICharacterParameter {
  status?: Status
}

const DEFAULT_STATUS = {
  hp: 100,
  mp: 100,
  affected: []
}

const Character = {
  create: (p: CharacterParameter) => {
    const ic = ICharacter.create(p)

    const status = {
      ...p.status,
      ...DEFAULT_STATUS
    }

    const getStatus = () => ({
      ...status
    })

    const setStatus = (s: Status) => {
      status.hp = s.hp
      status.mp = s.mp
      console.debug(ic.name, status)
    }

    return {
      ...ic,
      getStatus,
      setStatus
    }
  }
}

interface CharacterClass extends ReturnType<typeof ICharacter.create> {}

class CharacterClass {
  private readonly status: Status

  constructor (p: CharacterParameter) {
    const ic = ICharacter.create(p)
    Object.assign(this, ic)

    this.status = {
      ...DEFAULT_STATUS,
      ...p.status
    }
  }

  getStatus () {
    return { ...this.status }
  }

  setStatus (s: Status) {
    this.status.hp = s.hp
    this.status.mp = s.mp
  }
}

type CharacterType = ReturnType<typeof Character.create> | CharacterClass

interface Damage {
  physical: number
}

const DamageCalculator = {
  hit: (damage: Damage, hit: CharacterType) => {
    const status = hit.getStatus()
    status.hp -= damage.physical
    hit.setStatus(status)
  }
}

export { Character, CharacterClass, type IObjectCreated, type CharacterType, DamageCalculator }
