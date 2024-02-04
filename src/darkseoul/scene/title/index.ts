import { IScene } from 'iyagi/scene'
import { ITile } from 'iyagi/tile'
import SeoulFire from '../../object/main/SeoulFire'
import intro from '../intro'

const bg = new ITile({
  name: 'intro-bg',
  image: {
    url: '/assets/scene/title/bg.png'
  }
})

const title = new IScene({
  name: '타이틀 화면',
  tiles: [bg],
  objects: [SeoulFire],
  take: async () => {
    SeoulFire.play()
    console.error('title')

    return await new Promise((resolve) => {
      SeoulFire.event.tap = () => {
        resolve(intro)
      }
    })
  }
})

export default title
