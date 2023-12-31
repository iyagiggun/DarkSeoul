import Iyagi from 'iyagi'
import title from './darkseoul/scene/title'

function init () {
  const canvas = document.querySelector<HTMLCanvasElement>('#display')
  if (canvas == null) {
    throw new Error('Fail to init. no the canvas.')
  }

  Iyagi.set(canvas, title, { debug: true })
  Iyagi.play()
}

init()
