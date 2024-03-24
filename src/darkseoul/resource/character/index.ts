import { ICharacter, type CharacterParameter } from 'iyagi/character'
import { BasicStatusBar, status } from 'iyagi/status'

const DEFAULT_STATUS = {
  hp: 100,
  hpMax: 100,
  mp: 100,
  mpMax: 100
}

class Character extends ICharacter {
  status

  constructor (p: CharacterParameter) {
    super(p)

    this.status = status.create(DEFAULT_STATUS)
    this.status.event.change.bind(({ before, after }) => {
      BasicStatusBar.show(this, {
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
