import darkseoul from '../..'
import Ash from '../../object/main/Ash'
import RyuDahee from '../../object/main/RyuDahee'
import SeoulFire from '../../object/main/SeoulFire'
import CEO from '../../object/office/character/CEO'
import { createTiles, createWalls, getPartitions } from './map'

const tiles = createTiles()

const tiles1D = tiles.flatMap(i => i)
const walls = createWalls()
const partitions = getPartitions()

Ash.set_position(396, 82)
Ash.change_direction('left')
SeoulFire.set_position(360, 64)
RyuDahee.set_position(32, 200)

const objectList = [
  ...tiles1D,
  ...walls,
  ...partitions,
  CEO,
  Ash,
  SeoulFire,
  RyuDahee
]

const intro = darkseoul.create_scene({
  name: 'intro',
  object_list: objectList
})

intro.add_take(
  async () => {
    intro.remove_object(CEO)

    // 두리번
    RyuDahee.change_direction('up')
    await intro.wait(0.5)
    RyuDahee.change_direction('left')
    await intro.wait(0.5)
    RyuDahee.change_direction('down')
    await intro.wait(0.5)
    RyuDahee.change_direction('right')
    await intro.wait(0.5)

    await intro.show_message(RyuDahee, '사장..님....? ... 안계시나..요?')
    await intro.show_message(RyuDahee, '아우!! 뭐야 먼저 퇴근한거야? 나 혼자 야근하라고..?? 야근비라도 주고 시키던가.. 고용노동부는 뭐하는거야? 포괄임금제 하는 회사 사장들 다 잡아서 빨리 감방에 넣어야 하는거 아냐??')

    await intro.wait(0.5)
    RyuDahee.change_direction('right')
    await intro.wait(0.5)
    await intro.show_message(RyuDahee, '어..? 근데 저건.. 뭐지..?')

    // // 불 보기
    // await Intro.moveCamera(BonFire, 2);
    // await Intro.wait(2);
    // await Intro.moveCamera(DaheeYoo, 2);

    // // 불쪽으로 이동
    // await Intro.moveCharacter(DaheeYoo, [32, 82], 3, true);
    // await Intro.moveCharacter(DaheeYoo, [260, 82], 3, true);
    // await Intro.talk(DaheeYoo, '아니 누구신데 여기서..');
    // await Intro.talk(DaheeYoo, '꺄악! 불이다!!');

    // // 허둥지둥
    // await Intro.moveCharacter(DaheeYoo, [270, 82], 3, true);
    // await Intro.wait(0.1);
    // await Intro.moveCharacter(DaheeYoo, [250, 82], 3, true);
    // await Intro.wait(0.1);
    // await Intro.moveCharacter(DaheeYoo, [270, 82], 3, true);
    // await Intro.wait(0.1);
    // await Intro.moveCharacter(DaheeYoo, [250, 82], 3, true);
    // await Intro.wait(0.1);
    // await Intro.moveCharacter(DaheeYoo, [270, 82], 3, true);
    // await Intro.wait(0.1);
    // await Intro.moveCharacter(DaheeYoo, [250, 82], 3, true);
    // await Intro.wait(0.1);

    // // 커피 쏟기
    // await Intro.moveCharacter(DaheeYoo, [326, 82], 3, true);
    // await Intro.talk(DaheeYoo, '[손에 들고 있는 커피를 쏟았다]');
    // await Intro.wait(1);
    // await Intro.talk(FKeeper, '이 불은 Seoul 의 불..');
    // await Intro.talk(FKeeper, '오직 계승자의 의지만이 불을 끌 수 있을 뿐.. 그런 것으로는 끌 수 없습니다.');
    // await Intro.talk(DaheeYoo, '(으아아!! 뭐라는거야? 당황하면 안돼! 그래! 소화기! 소화기를 찾아야해!)');

    // // 소화기 보고 가져오기
    // await Intro.moveCharacter(DaheeYoo, [270, 82], 3, true);
    // await Intro.talk(DaheeYoo, '소화기!');
    // await Intro.moveCharacter(DaheeYoo, [32, 82], 3, true);
    // await Intro.wait(0.2);
    // Intro.removeObject(fireExtinguisher);
    // await Intro.wait(0.2);
    // await Intro.moveCharacter(DaheeYoo, [326, 82], 3, true);
    // await Intro.talk(DaheeYoo, '[소화기를 사용하였다]');
    // await Intro.talk(DaheeYoo, '제일인산암모늄을 끼얹어 주마!!');
    // await Intro.wait(1);
    // await BonFire.change('unlit');
    // await Intro.wait(0.5);

    // // 일 시키기 시작
    // await Intro.talk(FKeeper, '...');
    // await Intro.talk(DaheeYoo, '...');
    // await Intro.talk(FKeeper, '... ...');
    // await Intro.talk(DaheeYoo, '(.. 쎄하다.. 26년동안 쌓아온 나의 빅데이터가 말하는데, 저 여자랑 엮이면 안돼..)');
    // await Intro.talk(FKeeper, '... 당신은 방금 Seoul 에 빛과 온기를 주고 있던 불을 꺼뜨렸습니다..');
    // await Intro.talk(DaheeYoo, '(.. 확실해.. 정신나간 여자가 틀림없어.)');
    // await Intro.talk(FKeeper, '이제 불을 잃은 Seoul 은 Dark Seoul 이 되어 차가운 어둠속으로 끝없이 가라앉을 것 입니다.');
    // await Intro.talk(DaheeYoo, '(Dark Seoul...? 이 여자가 자꾸 뭐라는거야..?)');
    // await Intro.talk(FKeeper, 'Dark Seoul 에 다시 불을 가져 오시려면.. 이 검을 가져가세요.');

    // // 불에서 칼 제거
    // await BonFire.change('unlitWithoutTheSword');
    // await Intro.talk(DaheeYoo, '아니 이보세요, 이 쓰레기를 왜 나한테 주는거에요?');

    // // CEO 등장
    // CEO.setDirection('right').setPos([32, 128]);
    // Intro.addObject(CEO);
    // DaheeYoo.setDirection('left');
    // await Intro.wait(0.5);
    // await Intro.moveCamera(CEO, 2);
    // await Intro.wait(0.5);
    // await Intro.moveCamera(DaheeYoo, 2);
    // await Intro.talk(DaheeYoo, '어..? 꺄아아아악~! 뭐.. 뭐야!!');
    // await Intro.talk(FKeeper, '그는 거대한 Seoul 을 보유하고 있던 자..');
    // await Intro.talk(FKeeper, '불이 꺼지면서 그가 가진 거대한 Seoul 은 Dark Seoul 이 되어 그를 차갑고 어두운 존재로 변형 시켰습니다.');
    // await Intro.talk(DaheeYoo, '(자꾸 무슨 정신나간 헛소리야? 잠깐.. 저 개떡같은 머리! 구리구리한 바지! 사장이잖아??)');
    // await Intro.talk(FKeeper, '미약한 Seoul 조차 가지지 못한 지금의 당신은 상대할 수 없습니다.');

    intro.add_object(CEO)
  }
)

export default intro
