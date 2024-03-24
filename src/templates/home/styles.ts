import styled from "styled-components";

export const HomeTemplate =  styled.main`
  background-color: ${({ theme }) => theme.blue};
`;

export const SectionEmpty = styled.section`
  height: 100vh;
  width: 100%;
`;

export const CardsContainer = styled.section`
  > :nth-child(1n) {
    background-color:  #b9ceff;
  }

  > :nth-child(2n) {
    background-color:  #c6d7ff;
  }

  > :nth-child(3n) {
    background-color:  #d2e0ff;
  }

  > :nth-child(4n) {
    background-color:  #dfe8ff;
  }

  > :nth-child(5n) {
    background-color:  #ebf1ff;
  }
  
  > :not(:first-child) {
    margin-top: -3rem;
  }
`;

export const Card = styled.div`
  position: relative;
  height: 42rem;
  padding: 5rem 20rem 0;
  border-radius: 2rem;

  @media (max-width: 1280px) {
    padding: 5rem 6rem 0;
  }

  @media (max-width: 599px) {
    height: auto;
    padding: 4rem 4rem 8rem;
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.blue};
  font-size: 2.8rem;
  line-height: 2.8rem;
  font-weight: 900;
  margin-bottom: 3.4rem;
  text-transform: uppercase;

  @media (max-width: 599px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const Messages = styled.p`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.blue};
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 400;
  white-space: break-spaces;

  @media (min-width: 1280px) {
    max-width: 70rem;
  }

  @media (max-width: 599px) {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
`;