import { type IScene, Iyagi } from 'iyagi'
import { INTRO, OFFICE_PANTRY, TITLE } from './scene/keys'
import title from './scene/title'
import intro from './scene/intro'
import OfficePantry from './scene/office/pantry'

const scenes = new WeakMap<any, IScene>()

scenes.set(TITLE, title)
scenes.set(INTRO, intro)
scenes.set(OFFICE_PANTRY, OfficePantry)

const canvas = document.querySelector<HTMLCanvasElement>('#display') as HTMLCanvasElement
const darkseoul = new Iyagi({
  canvas,
  scenes,
  mode: 'development'
})

export default darkseoul
