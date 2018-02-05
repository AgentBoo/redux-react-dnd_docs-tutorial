import { MOVE_KNIGHT } from './constants'


export function moveKnight(toX, toY){
  return {
    type           : MOVE_KNIGHT,
    knightPosition : [ toX, toY ]
  }
};
