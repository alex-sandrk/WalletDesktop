import * as utils from '../../store/utils';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import {
  PasswordStrengthMeter,
  TextInput,
  AltLayout,
  AltLayoutNarrow,
  Btn,
  Sp
} from '../common';
import Message from './Message';

const PasswordMessage = styled(Message)`
  text-align: left;
  color: ${p => p.theme.colors.dark};
`;

const Green = styled.div`
  display: inline-block;
  color: ${p => p.theme.colors.success};
`;

const PasswordStep = props => {
  const onPasswordSubmit = e => {
    e.preventDefault();
    props.onPasswordSubmit({ clearOnError: false });
  };

  return (
    <AltLayout title="Create a Password" data-testid="onboarding-container">
      <AltLayoutNarrow>
        <form onSubmit={onPasswordSubmit} data-testid="pass-form">
          <PasswordMessage>
            Enter a strong password until the meter turns <Green>green</Green>.
          </PasswordMessage>
          <Sp mt={2}>
            <TextInput
              data-testid="pass-field"
              autoFocus
              onChange={props.onInputChange}
              error={props.errors.password}
              label="Password"
              value={props.password}
              type="password"
              id="password"
            />
            {!props.errors.password && (
              <PasswordStrengthMeter password={props.password} />
            )}
          </Sp>
          <Sp mt={3}>
            <TextInput
              data-testid="pass-again-field"
              onChange={props.onInputChange}
              error={props.errors.passwordAgain}
              label="Repeat password"
              value={props.passwordAgain}
              type="password"
              id="passwordAgain"
            />
          </Sp>
          <Sp mt={6}>
            <Btn block submit>
              Continue
            </Btn>
          </Sp>
        </form>
      </AltLayoutNarrow>
    </AltLayout>
  );
};

PasswordStep.propTypes = {
  onPasswordSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  passwordAgain: PropTypes.string,
  password: PropTypes.string,
  errors: utils.errorPropTypes('passwordAgain', 'password')
};

export default PasswordStep;
