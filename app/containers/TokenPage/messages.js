/*
 * TokenPage Messages
 *
 * This contains all the text for the TokenPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TokenPage';

export default defineMessages({
  tokenFound: {
    id: `${scope}.tokenFound`,
    defaultMessage: 'Below is your token',
  },
  tokenNotFound: {
    id: `${scope}.tokenNotFound`,
    defaultMessage: 'Token not found',
  },
});
