import { Iyagi } from 'iyagi'
import title from './darkseoul/scene/title'

const init = async () => {
  const canvas = document.querySelector<HTMLCanvasElement>('#display') as HTMLCanvasElement
  const darkseoul = new Iyagi(canvas, { mode: 'development' })
  darkseoul.play(title)
}

init()
