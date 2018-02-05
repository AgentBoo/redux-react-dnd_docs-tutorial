import { MOVE_KNIGHT } from './constants';

const initialState = {
  knightPosition : [4,4]
};


function boardReducer(state = initialState, action){
  switch(action.type){
    case MOVE_KNIGHT:
      return Object.assign({}, state, {
        knightPosition : action.knightPosition
      })

    default:
      return state
  };
};


export default boardReducer;
