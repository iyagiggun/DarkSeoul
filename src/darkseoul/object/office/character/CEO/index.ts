import { createCharacter } from 'iyagi/dist/object/character';

const UNIT = 64;
const collision = { x: 16, y: 50, w: 32, h: 14 };

export default createCharacter({
  name: 'CEO',
  sprite:{
    url: '/assets/object/office/character/CEO/sprite.png',
    motions: {
      default: {
        up: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 8, w: UNIT, h: UNIT })),
          collision: collision
        },
        down: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 10, w: UNIT, h: UNIT })),
          collision: collision
        },
        left: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 9, w: UNIT, h: UNIT })),
          collision: collision
        },
        right: {
          areaList: new Array(9)
            .fill(null)
            .map((_, idx) => ({ x: UNIT * idx, y: UNIT * 11, w: UNIT, h: UNIT })),
          collision: collision
        }
      }
    }
  }
});
