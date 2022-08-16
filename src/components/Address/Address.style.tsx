import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  max-width: 70%;
`;

export const LocationWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.large}

    display: block;
    width: 100%;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const IconWrapper = styled.div`
  svg {
    padding-top: 0.1rem;
  }
`;
