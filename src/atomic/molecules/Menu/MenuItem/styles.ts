import styled from 'styled-components';

export const Container = styled.div`
  div.list-group-item {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.textLight};
    font-size: 13px;
    padding: 0;
    background-color: ${(props) => props.theme.menuBg};
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.menuHover};
    }
    .infoItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        svg {
          font-size: 14px;
          margin-right: 10px;
        }
        &.chevron {
          svg {
            font-size: 11px;
            margin-right: 0;
          }
        }
      }
      &.level-1 {
        padding-left: 48px;
      }
      &.level-2 {
        padding-left: 68px;
      }
    }
  }
`;
