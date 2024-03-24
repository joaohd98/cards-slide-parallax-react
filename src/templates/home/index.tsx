import React from "react";
import {FC} from "react";
import * as S from './styles';
import C from './const';
import useAnimation from './animation';

const HomeTemplate: FC = () => {
  const { containerRef, setCardRef} = useAnimation();

  return (
    <S.HomeTemplate>
      <S.SectionEmpty />
      <S.CardsContainer ref={containerRef}>
        {
          C.cards.map(({ title, texts}, index) => (
            <S.Card key={title} ref={setCardRef(index)} style={{zIndex: index}}>
              <S.Title>{title}</S.Title>
              <S.Messages>
                {texts.map(text => <S.Message key={text}>{text}</S.Message>)}
              </S.Messages>
            </S.Card>
          ))
        }
      </S.CardsContainer>
      <S.SectionEmpty />
    </S.HomeTemplate>
  )

}

export default HomeTemplate;