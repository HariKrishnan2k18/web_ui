import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  text: ${({ theme }) => theme.text};
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  width: 300px;
  margin-left: 30px;
`;

export const StyleInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const IconStyle = styled.div`
  border-radius: 50%;
  background: darkslategray;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  height: 30px;
  justify-content: center;
`;

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  > img {
    border-radius: 50%;
  }
`;
