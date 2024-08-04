import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  color: white;
  width: 100%;
`;
export const Card = styled.div`
  background: ${({ theme }) => theme.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
  padding: 12px;
  border-radius: 8px;
`;

export const CardImage = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
`;

export const Value = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PercentDiv = styled.div<{ color?: string }>`
  color: ${({ color }) => color};
  gap: 5px;
`;

export const Count = styled.h3``;
