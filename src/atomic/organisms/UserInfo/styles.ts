import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize};
`;

export const Card = styled.div`
  display: flex;
`;

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const PreferenceValue = styled.div`
  display: flex;
`;

export const Label = styled.label`
  text-transform: capitalize;
  width: 30%;
`;

export const Value = styled.label`
  font-weight: 600;
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  margin: 5px;
  border-radius: 50%;
  flex-shrink: 0;
`;
