import React from 'react';
import style from 'styled-components';

export default function History() {
  return (
    <HistroyContainer>
      <Title>내역</Title>

      <NavListCotainer>
        <ListButton>신청 내역</ListButton>
        <ListButton>환불 내역</ListButton>
      </NavListCotainer>

      <ListArea>
        <TextBox>
          최근 신청한 남의집이 없으시네요!
          <br />
          지금 바로 남의집에 놀러가 보세요.
        </TextBox>
        <GaysHouseButton>男의집 둘러보기</GaysHouseButton>
      </ListArea>
    </HistroyContainer>
  );
}

const HistroyContainer = style.div`
  display: flex;
  flex-direction: column;
`;
const Title = style.div`
  color: gray;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;
const NavListCotainer = style.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;
const ListButton = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 50px;
`;
const ListArea = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
  height: 400px;
`;
const TextBox = style.span`
  margin: 20px 0;
  line-height: 24px;
  color: gray;
`;
const GaysHouseButton = style.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 20px;
  background: #212121;
  color: white;
`;
