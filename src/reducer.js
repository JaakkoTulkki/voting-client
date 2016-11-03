import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function (state = Map(), action) {
  console.log('reducer');
  console.log(state);
  switch (action.type){
    case 'SET_STATE':
      return setState(state, action.state);
  }
  return state;
}