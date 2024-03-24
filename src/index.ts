import darkseoul from './darkseoul'
import { TITLE } from './darkseoul/scene/keys'

const init = async () => {
  await darkseoul.play(TITLE)
}

void init()
