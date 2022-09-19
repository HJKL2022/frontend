import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
`;

export const Content = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallLight};

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.25rem;
    background-color: ${colors.orange2};
    height: 1.125rem;
    width: 2.375rem;
    padding: 0 0.375rem;
    color: ${colors.white1};

    > :first-child {
      ${fonts.xSmallBold}
    }
  `}
`;
