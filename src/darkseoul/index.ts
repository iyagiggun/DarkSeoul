import Iyagi from 'iyagi'
import title from './scene/title'

const canvas = document.querySelector<HTMLCanvasElement>('#display')
if (canvas == null) {
  throw new Error('Fail to init. no the canvas.')
}

const darkseoul = Iyagi.create(canvas, title, { debug: true })

export default darkseoul
