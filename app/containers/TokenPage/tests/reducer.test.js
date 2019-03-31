import { fromJS } from 'immutable';
import tokenPageReducer from '../reducer';

describe('tokenPageReducer', () => {
  it('returns the initial state', () => {
    expect(tokenPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
