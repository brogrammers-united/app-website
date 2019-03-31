import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tokenPage state domain
 */

const selectTokenPageDomain = state => state.get('tokenPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TokenPage
 */

const makeSelectTokenPage = () =>
  createSelector(selectTokenPageDomain, substate => substate.toJS());

export default makeSelectTokenPage;
export { selectTokenPageDomain };
