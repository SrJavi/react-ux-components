import { FaCalendar } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  > input {
    flex-grow: 1;
  }
`;

export const Calendar = styled(FaCalendar)`
  position: absolute;
  right: 15px;
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.textNeutralLighter};
  pointer-events: none;
`;
