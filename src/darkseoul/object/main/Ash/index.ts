import { createCharacter } from 'iyagi/dist/object/character';

const WIDTH = 32;
const HEIGHT = 56;

const Ash = createCharacter({
  name: '하얀 잿빛의 여인',
  photo_map: {
    default: '/assets/object/main/Ash/photo.png'
  },
  sprite:{
    url: '/assets/object/main/Ash/sprite.png',
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

export default Ash;
