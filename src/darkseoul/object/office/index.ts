import darkseoul from '../..'

function createOfficeTile (x: number, y: number) {
  return darkseoul.createTile(`office tile-[${x}, ${y}]`, {
    imgUrl: '/assets/object/office/sprite.png',
    spriteInfoMap: {
      default: {
        down: {
          areaList: [[0, 0, 32, 32]]
        }
      }
    },
    test: 1
  })
    .setPos(x, y)
}

export { createOfficeTile }
