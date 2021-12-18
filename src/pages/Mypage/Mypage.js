import React from 'react';
import style from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Default from './Default/Default';
import History from './History/History';
import Footer from '../../components/Footer/Footer';

export default function Mypage() {
  return (
    <MyPageCotainer>
      <CenterContainer>
        <SideNav />
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </CenterContainer>
      <Footer />
    </MyPageCotainer>
  );
}

const MyPageCotainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  height: calc(100vh - 71px);
`;

const CenterContainer = style.div`
  display: flex;
`;
