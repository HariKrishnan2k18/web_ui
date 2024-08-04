import styled from "styled-components";

export const Wrappper = styled.div`
    display: grid;
    grid-template-columns: 65% 35%;
    gap: 30px;
    > div:first-child {
        background: black;
    }
    > div {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text}; 
        border-radius: 8px;
    }
}
`;

export const Container = styled.div`
  padding: 20px;
  padding-right: 50px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  padding-bottom: 20px;
`;
