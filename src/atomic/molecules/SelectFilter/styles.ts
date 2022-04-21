import styled from 'styled-components';

interface IContainer {
    isMultiple?: boolean;
}

export const Container = styled.div<IContainer>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 75px;
    width: ${(p) => (p.isMultiple ? '250px' : '220px')};
`;
