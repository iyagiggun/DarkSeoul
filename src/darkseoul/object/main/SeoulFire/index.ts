import IObject from 'iyagi/object';

const WIDTH = 32;
const HEIGHT = 44;

const SeoulFire = IObject.create({
  name: '서울의 불',
  sprite: {
    url: '/assets/object/main/SeoulFire/sprite.png',
    motions: {
      default: {
        down: {
          areaList: new Array(4)
            .fill(null)
            .map((_, idx) => ({ x: WIDTH * idx, y: 0, w: WIDTH, h: HEIGHT })),
          collision: { x: 0, y: 12, w: 32, h: 32 }
        }
      },
      unlit: {
        down: {
          areaList: [{ x: 0, y: HEIGHT, w: WIDTH, h: HEIGHT }],
          collision: { x: 0, y: 12, w: 32, h: 32 }
        }
      },
      unlitWithoutTheSword: {
        down: {
          areaList: [{ x: WIDTH, y: HEIGHT, w: WIDTH, h: HEIGHT }],
          collision: { x: 0, y: 12, w: 32, h: 32 }
        }
      }
    }
  }
});

export default SeoulFire;
