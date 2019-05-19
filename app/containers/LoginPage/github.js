import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SignInButton = styled.button`
  border: 3px #eee solid;
  border-radius: 10px;
  padding: 5px;
  font-size: 1.2em;
`;

export default function Github() {
  return (
    <SignInButton>
      <a href="http://localhost:8080/oauth2/authorize/github-api?access_type=offline&client_id=bgu-cli-client&response_type=code&scope=user+repo&state=state">
        <FontAwesomeIcon icon={['fab', 'github']} /> Sign in with Github
      </a>
    </SignInButton>
  );
}
