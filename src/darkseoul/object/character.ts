import ICharacter from 'iyagi/object/character'

type Effect = 'POISON'

interface Status {
  hp: number
  mp: number
  affected: Effect[]
}

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

    return {
      ...ic,
      getStatus
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
}

export { Character, CharacterClass }
