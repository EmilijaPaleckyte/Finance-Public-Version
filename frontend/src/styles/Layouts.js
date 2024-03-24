import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InnerLayout = styled.div`
  padding: 1rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;
