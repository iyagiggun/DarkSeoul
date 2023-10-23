
import Iyagi from 'iyagi';

const canvas = document.querySelector<HTMLCanvasElement>('#display');
if (canvas == null) {
  throw new Error('Fail to init. no the canvas.');
}

const darkseoul = Iyagi.create(canvas, { debug: true });

export default darkseoul;
