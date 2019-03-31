/**
 *
 * TokenPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import queryString from 'query-string';
import makeSelectTokenPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class TokenPage extends React.Component {
  copyToken = () => {
    const tokenTextArea = document.getElementById('token');
    tokenTextArea.select();
    document.execCommand('copy');
  };

  render() {
    const queryParams = queryString.parse(this.props.location.search);
    const token = queryParams.token || 'Token not found';

    const messageToUser = queryParams.token
      ? messages.tokenFound
      : messages.tokenNotFound;

    return (
      <div>
        <FormattedMessage {...messageToUser} />
        <textarea id="token" value={token} readOnly />
        <button type="button" onClick={this.copyToken}>
          Copy Token
        </button>
      </div>
    );
  }
}

TokenPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tokenPage: makeSelectTokenPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tokenPage', reducer });
const withSaga = injectSaga({ key: 'tokenPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TokenPage);
