import styled, { css } from 'styled-components';

import { noScrollBar, subTitle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { defaultWidth } }) => css`
    ${defaultWidth}
    padding-left: 1rem;
  `}
`;

export const MentionWrapper = styled.div`
  ${subTitle}
`;

export const ListWrapper = styled.div`
  ${noScrollBar}

  display: flex;
  gap: 0.8rem;
  padding: 1rem 0;
  width: 100%;
  height: fit-content;
  overflow-x: scroll;
`;

export const noListWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    text-align: center;
    line-height: 1.5rem;
    white-space: pre;
    color: ${colors.grey4};
  `}
`;
