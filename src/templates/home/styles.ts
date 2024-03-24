import styled from "styled-components";

export const HomeTemplate =  styled.main`
  background-color: ${({ theme }) => theme.blue};
  overflow: hidden;
`;

export const SectionEmpty = styled.section`
  height: 100vh;
  width: 100%;
`;

export const HomeSection = styled.section``;

export const PinContainer = styled.div``;

export const CardsContainer = styled.div`
  position: relative;
  height: 45rem;

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

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Card = styled.div<{position: number}>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 5rem 20rem 0;
  border-radius: 2rem;
  transform: translateY(${({position}) => position * 95}%);
  z-index: ${({position}) => position};

  @media (max-width: 1280px) {
    padding: 5rem 6rem 0;
  }

  @media (max-width: 768px) {
    position: relative;
    padding: 4rem 4rem 10rem;
    transform: translateY(0);

    &:not(:first-child) {
      margin-top: -4rem;
    }
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
  
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.blue};
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 400;
  white-space: break-spaces;

  @media (min-width: 1281px) {
    max-width: 70rem;
  }
  
  @media (max-width: 1280px) {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }

  @media (max-width: 599px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;