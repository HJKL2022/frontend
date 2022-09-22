import styled, { css } from 'styled-components';

import { defaultPageStyle, flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;

export const InputFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TowContents = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`;

export const SubmitBtn = styled.button`
  ${({ theme: { fonts, colors } }) => css`
    ${flexCenter};
    ${fonts.largeBold};
    background: ${colors.orange3};
    color: ${colors.white1};
    border-radius: 4px;
    width: 100%;
    height: 40px;
  `}
`;
