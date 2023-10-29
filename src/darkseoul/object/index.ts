import ICharacter from 'iyagi/object/character';

type Parameter = Parameters<typeof ICharacter.create>[0];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Character extends ReturnType<typeof ICharacter.create> { }

class Character {

  private status: string;

  constructor(p: Parameter) {
    const ic = ICharacter.create(p);
    Object.assign(this, ic);

    this.status = 'good';
  }

  getStatus() {
    return this.status;
  }
}

export default Character;