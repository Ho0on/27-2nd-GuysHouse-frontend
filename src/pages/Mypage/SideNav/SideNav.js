import React from 'react';
import style from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <SideNavContainer>
      <UserInfo>
        <Name>김태영</Name>
        <Email>n76eho@naver.com</Email>
        <Certification>카카오계정</Certification>
        <Certification>보인인증 완료</Certification>
      </UserInfo>
      <Administration>
        <AdministrationTitle>
          <Link to="/mypage">마이페이지</Link>
        </AdministrationTitle>

        <AdministrationTitle>
          남의집 관리
          <Review>
            <Link to="/mypage/history">내역</Link>
          </Review>
          <Review>후기</Review>
        </AdministrationTitle>

        <AdministrationTitle>
          계정 관리
          <Review>프로필 수정</Review>
          <Review>개인정보 수정</Review>
        </AdministrationTitle>

        <AdministrationTitle>결제 수단 관리</AdministrationTitle>
        <Logout>로그아웃</Logout>
      </Administration>
    </SideNavContainer>
  );
}
const SideNavContainer = style.div`
  min-width: 285px;
  height: calc(100vh - 71px);
`;
const UserInfo = style.div``;
const Name = style.div`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 16px
`;
const Email = style.div`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 300;
`;
const Certification = style.span`
  font-size: 14px;
  font-weight: 500;
  color: lightgray;
  margin-right: 10px;
  `;
const Administration = style.ul`
  margin: 60px 0;
`;
const AdministrationTitle = style.li`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 50px
`;
const Review = style.li`
  font-size: 16px;
  font-weight: 200;
  margin: 20px 0;
`;
const Logout = style.div``;
