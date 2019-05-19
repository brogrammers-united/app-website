/**
 *
 * LoginPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import Github from './github';

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const CenterSection = styled.section`
  grid-column-start: 2;
  margin-top: 50px;
`;

function LoginPage() {
  return (
    <Page>
      <CenterSection>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Login to ___" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <Github />
      </CenterSection>
    </Page>
  );
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
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

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
