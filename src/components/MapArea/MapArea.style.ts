import styled, { css } from 'styled-components';

import { noScrollBar } from '@styles/mixin';

//index.tsx
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Map = styled.div`
  width: 100%;
  flex-grow: 1;
  z-index: 1;
`;

//ShareListSlide.tsx
export const ShareListContainer = styled.div<{ curTop: number }>`
  ${({ theme: { defaultPadding, colors }, curTop }) => css`
    ${defaultPadding};
    padding-bottom: 1.5rem;
    background-color: ${colors.white1};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${curTop}%;
    z-index: 100;
    height: 100%;
    min-height: 4.375rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ${noScrollBar}
    box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px 8px 0px 0px;
  `}
`;

export const IconContainer = styled.div`
  padding-top: 0.75rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.largeBold}
  line-height: 1.5rem;
  padding: 0.5rem 0 1.375rem 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ListContent = styled.div``;
