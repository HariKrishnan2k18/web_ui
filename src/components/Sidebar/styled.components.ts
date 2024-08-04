import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e2f;
`;
export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  &: hover {
    background-color: #2e2e3f;
    > svg {
      color: blue !important;
    }
    border-left: 3px solid blue;
  }
`;

export const PowerIcon = styled(SidebarItem)`
  position: absolute;
  top: 80%;
`;
