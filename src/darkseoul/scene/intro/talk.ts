import { wait } from 'iyagi/utils'
import Ash from '../../object/main/Ash'
import RyuDahee from '../../object/main/RyuDahee'
import SeoulFire from '../../object/main/SeoulFire'
import CEO from '../../object/office/character/CEO'
import { feInOffice } from './map'
import { camera, type IScene } from 'iyagi/scene'

export default async (intro: IScene) => {
  intro.objects.delete(CEO)

  console.error(SeoulFire.scene)

  SeoulFire.play()

  await camera.focus(RyuDahee)
  // 두리번
  RyuDahee.directTo('up')
  await wait(0.5)
  RyuDahee.directTo('left')
  await wait(0.5)
  RyuDahee.directTo('down')
  await wait(0.5)
  RyuDahee.directTo('right')
  await wait(0.5)

  await RyuDahee.talk('사장..님....? ... 안계시나..요?')
  await RyuDahee.talk('아우!! 뭐야 먼저 퇴근한거야? 나 혼자 야근하라고..?? 야근비라도 주고 시키던가.. 고용노동부는 뭐하는거야? 포괄임금제 하는 회사 사장들 다 잡아서 빨리 감방에 넣어야 하는거 아냐??')

  await wait(0.5)
  RyuDahee.directTo('right')
  await wait(0.5)
  await RyuDahee.talk('어..? 근데 저건.. 뭐지..?')

  // 불 보기
  await camera.focus(SeoulFire, 2)
  await wait(2)
  await camera.focus(RyuDahee, 2)

  // 불쪽으로 이동
  await intro.objects.move(RyuDahee, { x: 32, y: 82 }, { speed: 3, focusing: true })
  await intro.objects.move(RyuDahee, { x: 260, y: 82 }, { speed: 3, focusing: true })
  await RyuDahee.talk('아니 누구신데 여기서..')
  await RyuDahee.talk('꺄악! 불이다!!')

  // 허둥지둥
  await intro.objects.move(RyuDahee, { x: 270, y: 82 }, { speed: 3, focusing: true })
  await wait(0.1)
  await intro.objects.move(RyuDahee, { x: 250, y: 82 }, { speed: 3, focusing: true })
  await wait(0.1)
  await intro.objects.move(RyuDahee, { x: 270, y: 82 }, { speed: 3, focusing: true })
  await wait(0.1)
  await intro.objects.move(RyuDahee, { x: 250, y: 82 }, { speed: 3, focusing: true })
  await wait(0.1)
  await intro.objects.move(RyuDahee, { x: 270, y: 82 }, { speed: 3, focusing: true })
  await wait(0.1)
  await intro.objects.move(RyuDahee, { x: 250, y: 82 }, { speed: 3, focusing: true })
  await wait(0.1)

  // 커피 쏟기
  await intro.objects.move(RyuDahee, { x: 326, y: 82 }, { speed: 3, focusing: true })
  await RyuDahee.talk('[손에 들고 있는 커피를 쏟았다]')
  await wait(1)
  await Ash.talk('이 불은 Seoul 의 불..')
  await Ash.talk('오직 계승자의 의지만이 불을 끌 수 있을 뿐.. 그런 것으로는 끌 수 없습니다.')
  await RyuDahee.talk('(으아아!! 뭐라는거야? 당황하면 안돼! 그래! 소화기! 소화기를 찾아야해!)')

  // 소화기 보고 가져오기
  await intro.objects.move(RyuDahee, { x: 270, y: 82 }, { speed: 3, focusing: true })
  await RyuDahee.talk('소화기!')
  await intro.objects.move(RyuDahee, { x: 32, y: 82 }, { speed: 3, focusing: true })
  await wait(0.2)
  intro.objects.delete(feInOffice)
  await wait(0.2)
  await intro.objects.move(RyuDahee, { x: 326, y: 82 }, { speed: 3, focusing: true })
  await RyuDahee.talk('[소화기를 사용하였다]')
  await RyuDahee.talk('제일인산암모늄을 끼얹어 주마!!')
  await wait(1)
  SeoulFire.change('unlit')
  await wait(0.5)

  // 일 시키기 시작
  await Ash.talk('...')
  await RyuDahee.talk('...')
  await Ash.talk('... ...')
  await RyuDahee.talk('(.. 쎄하다.. 26년동안 쌓아온 나의 빅데이터가 말하는데, 저 여자랑 엮이면 안돼..)')
  await Ash.talk('... 당신은 방금 Seoul 에 빛과 온기를 주고 있던 불을 꺼뜨렸습니다..')
  await RyuDahee.talk('(.. 확실해.. 정신나간 여자가 틀림없어.)')
  await Ash.talk('이제 불을 잃은 Seoul 은 Dark Seoul 이 되어 차가운 어둠속으로 끝없이 가라앉을 것 입니다.')
  await RyuDahee.talk('(Dark Seoul...? 이 여자가 자꾸 뭐라는거야..?)')
  await Ash.talk('Dark Seoul 에 다시 불을 가져 오시려면.. 이 검을 가져가세요.')

  // 불에서 칼 제거
  SeoulFire.change('unlitWithoutTheSword')
  await RyuDahee.talk('아니 이보세요, 이 쓰레기를 왜 나한테 주는거에요?')

  // CEO 등장
  CEO.directTo('right')
  CEO.positionAt({ x: 32, y: 128 })
  intro.objects.add(CEO)

  RyuDahee.directTo('left')
  await wait(0.5)
  await camera.focus(CEO, 2)
  await wait(0.5)
  await camera.focus(RyuDahee, 2)
  await RyuDahee.talk('어..? 으아아악! 뭐.. 뭐야!!')
  await Ash.talk('그는 거대한 Seoul 을 보유하고 있던 자..')
  await Ash.talk('불이 꺼지면서 그가 가진 거대한 Seoul 은 Dark Seoul 이 되어 그를 차갑고 어두운 존재로 변형 시켰습니다.')
  await RyuDahee.talk('(자꾸 무슨 정신나간 헛소리야? 잠깐.. 저 개떡같은 머리! 구리구리한 바지! 사장이잖아??)')
  await Ash.talk('미약한 Seoul 조차 가지지 못한 지금의 당신은 상대할 수 없습니다.')
}
