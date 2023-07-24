import director from './darkseoul/director'
import intro from './darkseoul/scene/intro'

function init () {
  director.play(intro).then(() => {
    console.error('tttt')
  }).catch((e) => {
    console.error(e)
  })
}

init()
