// import ICharacter from 'iyagi/object/character';

import Character from '../..';

const WIDTH = 32;
const HEIGHT = 56;

const RyuDahee = new Character({
  name: '류다희',
  photoMap: {
    default: '/assets/object/main/RyuDahee/photo.png'
  },
  sprite: {
    url: '/assets/object/main/RyuDahee/sprite.png',
    motions: {
      default: {
        up: {
          areaList: new Array(4)
            .fill(null)
            .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 3, w: WIDTH, h: HEIGHT })),
          collision: { x: 0, y: 40, w: 32, h: 16 }
        },
        down: {
          areaList: new Array(4)
            .fill(null)
            .map((_, idx) => ({ x: WIDTH * idx, y: 0, w: WIDTH, h: HEIGHT })),
          collision: { x: 0, y: 40, w: 32, h: 16 }
        },
        left: {
          areaList: new Array(4)
            .fill(null)
            .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT, w: WIDTH, h: HEIGHT })),
          collision: { x: 0, y: 40, w: 32, h: 16 }
        },
        right: {
          areaList: new Array(4)
            .fill(null)
            .map((_, idx) => ({ x: WIDTH * idx, y: HEIGHT * 2, w: WIDTH, h: HEIGHT })),
          collision: { x: 0, y: 40, w: 32, h: 16 }
        }
      }
    }
  }
});

export default RyuDahee;
