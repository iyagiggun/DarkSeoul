import { ICharacter } from 'iyagi/object'
import IStatus, { IStatusBarBasic } from 'iyagi/object/character/status'

const DEFAULT_STATUS = {
  hp: 100,
  hpMax: 100,
  mp: 100,
  mpMax: 100
}

type ICharacterConstructorParameters = ConstructorParameters<typeof ICharacter>[0]

interface Parameter extends ICharacterConstructorParameters {
}

class Character extends ICharacter {
  status

  constructor (p: Parameter) {
    super(p)

    this.status = IStatus.create(DEFAULT_STATUS)
    this.status.on('change', ({ before, after }) => {
      IStatusBarBasic.show(this.container, {
        key: 'hp',
        before: before.hp,
        after: after.hp,
        max: before.hpMax,
        color: '#a81b2e'
      })
    })
  }
}

interface Damage {
  physical: number
}

const DamageCalculator = {
  hit: (damage: Damage, hit: Character) => {
    const status = hit.status
    const hp = Math.max(status.get().hp - damage.physical, 0)
    status.set({ hp })
  }
}

export { Character, DamageCalculator }
