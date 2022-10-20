import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grey1};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `}

  > * {
    ${({ theme }) => theme.defaultPadding}
  }

  > :last-child {
    flex-grow: 1;
    padding-bottom: 5.75rem;
  }
`;

export const ListHeader = styled.header`
  ${({ theme }) => theme.defaultWidth}

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white1};
  padding: 0;
  width: 86%;

  > :first-child,
  > :last-child {
    padding: 0 1rem;
  }
`;

export const ListContent = styled.div`
  margin-top: 120px;
`;

export const AddKeywordButton = styled.button`
  ${flexCenter}
  flex-direction: row;
  gap: 4px;
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%);
  max-width: 18rem;
  height: 2.625rem;
  background: ${({ theme }) => theme.colors.orange2};
  box-shadow: 2px 4px 8px rgba(255, 69, 58, 0.2);
  border-radius: 1.25rem;
`;

export const KeywordContent = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    margin-left: 0.25rem;
    ${fonts.largeBold};
    color: ${colors.white0};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;
export const Text = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    min-width: 4rem;
    width: 4rem;
    ${fonts.largeRegular};
    color: ${colors.white0};
  `}
`;
