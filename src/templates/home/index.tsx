import React from "react";
import {FC} from "react";
import * as S from './styles';
import C from './const';

const HomeTemplate: FC = () => {
  return (
    <S.HomeTemplate>
      <S.SectionEmpty />
      <S.CardsContainer>
        {
          C.cards.map(({ title, texts}) => (
            <S.Card key={title}>
              <S.Title>{title}</S.Title>
              <S.Messages>
                {texts.map(text => <S.Message>{text}</S.Message>)}
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