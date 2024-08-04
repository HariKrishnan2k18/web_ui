import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Imgdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  > img {
    border-radius: 50%;
  }
`;

export const Comments = styled.div``;
export const StarSpan = styled.span<{ color?: string }>`
  font-size: 24px;
  color: ${({ color }) => color};
`;
