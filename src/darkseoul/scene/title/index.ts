import { IScene } from 'iyagi/scene'
import { ITile } from 'iyagi/tile'
import SeoulFire from '../../resource/main/SeoulFire'
import { INTRO, OFFICE_PANTRY } from '../keys'

const bg = new ITile({
  name: 'intro-bg',
  image: {
    url: '/assets/scene/title/bg.png'
  }
})

const title = new IScene({
  name: '타이틀 화면',
  objects: [bg, SeoulFire],
  take: async () => {
    SeoulFire.play()
    return await new Promise((resolve) => {
      SeoulFire.event.tap = () => {
        resolve(INTRO)
      }
    })
  }
})

export default title
