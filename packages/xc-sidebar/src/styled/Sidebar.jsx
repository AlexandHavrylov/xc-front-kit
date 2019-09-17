import styled from 'styled-components';


export const ResponsiveWrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  height: 100vh ;
  position: relative;
  float: left;
  ${({ animate }) => animate && 'transition: 1s'}
`;
export const RightBorder = styled.div`
  width: 2px;
  background-color: ${({ color }) => color};
  height: 100% ;
  float: right;
  position: relative;
  right: 9px;
`;


export const CloseOpenButton = styled.button`
  width: 20px;
  height: 20px;
  position: relative;
  top: 10%;
  color: black;
  right: 9px;
  border-radius: 50%;
  border: 1px solid gray;
  padding: 3px;
  background-color: white;
  transform: ${({ toRight }) => (toRight ? 'rotateZ(-360deg)' : 'rotateZ(180deg)')};
  transition: .5s;
  transition-timing-function: linear;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const RightBorderWrapper = styled.div`
  width: 22px;
  height: 100vh ;
  float: right;
  right: -10px;
  position: absolute;
  cursor: pointer;
`;

export const AntiSelect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
`;


export const ChildWrapper = styled.div`
  overflow: hidden
`;
