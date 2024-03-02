import { type IScene, Iyagi } from 'iyagi'
import title from './darkseoul/scene/title'
import { INTRO, OFFICE_PANTRY, TITLE } from './darkseoul/scene/keys'
import intro from './darkseoul/scene/intro'
import OfficePantry from './darkseoul/scene/office/pantry'

const scenes = new WeakMap<any, IScene>()

scenes.set(TITLE, title)
scenes.set(INTRO, intro)
scenes.set(OFFICE_PANTRY, OfficePantry)

const init = async () => {
  const canvas = document.querySelector<HTMLCanvasElement>('#display') as HTMLCanvasElement
  const darkseoul = new Iyagi({
    canvas,
    scenes,
    mode: 'development'
  })
  await darkseoul.play(TITLE)
}

void init()
