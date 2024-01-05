import { ITile } from 'iyagi/object'
import IScene from 'iyagi/scene'
import intro from '../intro'
import SeoulFire from '../../object/main/SeoulFire'

const bg = new ITile({
  name: 'intro-bg',
  image: '/assets/scene/title/bg.png'
})

// bg.container.height = 100

const title = new IScene({
  name: '타이틀 화면',
  tileList: [bg],
  objectList: [SeoulFire],
  take: async () => {
    SeoulFire.play()
    console.error('title')

    await new Promise<void>((resolve) => {
      SeoulFire.events.onTap = () => {
        resolve()
      }
    })

    return intro
  }
})

export default title
