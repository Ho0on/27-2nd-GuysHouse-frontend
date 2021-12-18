import React from 'react';
import { useState } from 'react';
import style from 'styled-components';

export default function Default() {
  const [TextColor, setTextColor] = useState({
    color1: true,
    color2: false,
    color3: false,
  });

  const changeColor = event => {
    if (event.target.id === '1') {
      setTextColor({
        color1: true,
        color2: false,
        color3: false,
      });
    } else if (event.target.id === '2') {
      setTextColor({
        color1: false,
        color2: true,
        color3: false,
      });
    } else if (event.target.id === '3') {
      setTextColor({
        color1: false,
        color2: false,
        color3: true,
      });
    }
  };

  return (
    <DefaultContainer>
      <Introduce>
        자기 소개가 없습니다.
        <div>
          <Button>프로필 등록</Button>
        </div>
      </Introduce>

      <NavListCotainer>
        <ListButton>내역</ListButton>
        <Line />
        <ListButton>후기</ListButton>
      </NavListCotainer>

      <ListContainer>
        <TitleContainer>
          <Title>신청한 男의집</Title>
          <AllButton>전체보기</AllButton>
        </TitleContainer>

        <ReservationListContainer>
          <ReservationButton
            id="1"
            onClick={changeColor}
            TextColor={TextColor.color1}
          >
            <Count TextColor={TextColor.color1}>0</Count>
            예약 확정 전
          </ReservationButton>

          <Line />
          <ReservationButton
            id="2"
            onClick={changeColor}
            TextColor={TextColor.color2}
          >
            <Count TextColor={TextColor.color2}>0</Count>
            예약 확정
          </ReservationButton>

          <Line />
          <ReservationButton
            id="3"
            onClick={changeColor}
            TextColor={TextColor.color3}
          >
            <Count TextColor={TextColor.color3}>0</Count>
            참여 완료
          </ReservationButton>
        </ReservationListContainer>

        <GaysHouse>
          <TextBox>
            최근 신청한 남의집이 없으시네요!
            <br />
            지금 바로 남의집에 놀러가 보세요.
          </TextBox>
          <GaysHouseButton>男의집 둘러보기</GaysHouseButton>
        </GaysHouse>
      </ListContainer>
    </DefaultContainer>
  );
}

const DefaultContainer = style.div`
  display: flex;
  flex-direction: column;
`;
const Introduce = style.div`
  color: gray;
  display: flex;
  flex-direction: column;
`;
const Button = style.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 20px;
`;
const NavListCotainer = style.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;
const ListButton = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100px;
`;
const Line = style.div`
  border-left: 1px solid lightgray;
  height: 60%;
`;
const ListContainer = style.div``;
const TitleContainer = style.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Title = style.span`
  font-size: 26px;
  font-weight: 700;
`;
const AllButton = style.button`
  color: lightgray;
`;
const ReservationListContainer = style.div`
  display:flex;
  align-items: center;
  margin: 20px 0;
  background: #f6f6f6;
  height: 80px;
  border-radius: 5px;
  flex: 1;
`;
const ReservationButton = style.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  color:${props => (props.TextColor ? 'black' : 'gray')};
`;
const Count = style.span`
  margin-bottom: 8px;
  color:${props => (props.TextColor ? 'orange' : 'gray')};
`;
const GaysHouse = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox = style.span`
  margin: 20px 0;
  line-height: 24px;
  color: gray;
`;
const GaysHouseButton = style.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px 80px;

`;
