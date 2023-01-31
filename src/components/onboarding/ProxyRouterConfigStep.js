import * as utils from '../../store/utils';
import PropTypes from 'prop-types';
import React from 'react';

import { TextInput, AltLayout, Btn, Sp, AltLayoutNarrow } from '../common';
import SecondaryBtn from './SecondaryBtn';

const ProxyRouterConfigStep = props => {
  return (
    <AltLayout
      title="Configure Proxy Router"
      data-testid="onboarding-container"
    >
      <AltLayoutNarrow>
        <form
          onSubmit={props.onProxyRouterConfigured}
          data-testid="pr-config-form"
        >
          <Sp mt={2}>
            <TextInput
              data-testid="pool-field"
              autoFocus
              onChange={props.onInputChange}
              noFocus
              error={props.errors.proxyDefaultPool}
              label="Default Destination Address"
              value={props.proxyDefaultPool}
              type="text"
              id="proxyDefaultPool"
            />
          </Sp>
          <Sp mt={2}>
            <SecondaryBtn onClick={props.onUseHostedProxyRouter} block>
              Or use hosted proxy router
            </SecondaryBtn>
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

ProxyRouterConfigStep.propTypes = {
  onProxyRouterConfigured: PropTypes.func.isRequired,
  onUseHostedProxyRouter: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  proxyDefaultPool: PropTypes.string,
  errors: utils.errorPropTypes('proxyDefaultPool')
};

export default ProxyRouterConfigStep;
