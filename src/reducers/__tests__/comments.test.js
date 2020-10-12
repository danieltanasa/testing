import commentsReducer from 'reducers/comments' ;
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of the SAVE_COMMENT',()=>{
  const action = {
    type:SAVE_COMMENT,
    payload: 'NEW COMMENT'
  };

  const newState = commentsReducer ([],action);

  expect (newState).toEqual(['NEW COMMENT'])
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([],{type:'LSDADAS'});
  expect(newState).toEqual([]);
});
