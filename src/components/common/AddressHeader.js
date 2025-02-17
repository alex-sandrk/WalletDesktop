import React, { useContext } from 'react';
import styled from 'styled-components';
import { ToastsContext } from '../toasts';
import { BaseBtn } from '.';
import { abbreviateAddress } from '../../utils';
import { IconCopy } from '@tabler/icons';

const Container = styled.header`
  padding: 1.5rem 0 0 2.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #384764;
  padding: 0.4rem 1.25rem;
  color: ${p => p.theme.colors.dark};
  opacity: 0.8;
`;

const Address = styled.div`
  font-size: 1.3rem;
  margin-right: 1rem;
  cursor: default;
  border-right: 1px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 240px;
  @media (min-width: 960px) {
    max-width: 100%;
  }
`;

export const AddressHeader = ({ copyToClipboard, address }) => {
  const context = useContext(ToastsContext);

  const onCopyToClipboardClick = () => {
    copyToClipboard(address);
    context.toast('info', 'Address copied to clipboard', {
      autoClose: 1500
    });
  };

  return (
    <Container>
      <AddressContainer>
        <Address data-testid="address">{abbreviateAddress(address, 6)}</Address>
        <IconCopy
          style={{ cursor: 'pointer' }}
          onClick={onCopyToClipboardClick}
        />
      </AddressContainer>
    </Container>
  );
};
