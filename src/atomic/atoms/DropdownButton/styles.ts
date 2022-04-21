import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0 5px;
  height: 30px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text2};
  cursor: pointer;
  transition: color 0.2s;
  transition: background-color 0.2s;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    background-color: ${(props) => props.theme.defaultClick};
  }
`;

export const Menu = styled.div`
  position: absolute;
  padding: 10px 5px;
  right: 0;
  bottom: 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.theme.panel};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.size};
  border: 1px solid ${(props) => props.theme.border};
  width: 180px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  z-index: 1;
  transform: translateY(100%);
`;
