import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const IconStyle = styled.span<{ color?: string }>`
  width: 70px;
  height: 70px;
  background: ${({ color }) => color};
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
