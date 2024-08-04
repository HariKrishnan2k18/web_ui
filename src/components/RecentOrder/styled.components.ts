import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const BodyRow = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  >div: first-child {
    width: 100%;
  }
  > div {
    width: 50%;
  }
`;

export const CustomerImg = styled.img`
  border-radius: 50%;
`;

export const ImgTag = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Table = styled.div`
  > div {
    border-bottom: 1px solid #464242;
  }
  > div:last-child {
    border-bottom: none;
  }
`;
export const Thead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px 0px;
  >div: first-child {
    width: 100%;
  }
  > div {
    width: 50%;
  }
`;

export const Status = styled.div<{ color?: string; background?: string }>`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  width: 80px;
  text-align: center;
  border-radius: 8px;
`;

export const Title = styled.h3`
  margin-bottom: 0px;
`;
