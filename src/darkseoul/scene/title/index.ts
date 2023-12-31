import { ITile } from 'iyagi/object'
import IScene from 'iyagi/scene'
import intro from '../intro'
import SeoulFire from '../../object/main/SeoulFire'

const bg = new ITile({
  name: 'intro-bg',
  image: '/assets/scene/title/bg.png'
})

// bg.container.height = 100

const title = IScene.create({
  name: '타이틀 화면',
  tileList: [bg, SeoulFire],
  take: async () => {
    console.error('title')

    await new Promise<void>((resolve) => {
      window.setTimeout(() => {
        resolve()
      }, 2000)
    })
    return intro
  }
})

export default title
