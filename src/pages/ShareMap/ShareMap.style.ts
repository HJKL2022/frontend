import styled from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle};
  > :last-child {
    padding: 0;
  }
`;

export const ListHeader = styled.header`
  ${({ theme }) => theme.defaultWidth}

  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white1};
  padding: 0;
  width: 100%;

  > :first-child,
  > :last-child {
    padding: 0 1rem;
  }
`;

export const TabsWrapper = styled.div`
  ${({ theme: { defaultPadding } }) => defaultPadding}
`;

export const CurrentAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2.5rem;
  path {
    stroke: ${({ theme }) => theme.colors.orange3};
  }
`;

export const AddressText = styled.span``;
