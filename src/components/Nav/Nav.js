import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  const { Kakao } = window;
  const token = window.localStorage.getItem('access_token');
  const isHost = sessionStorage.getItem('isHost');

  const navigate = useNavigate();
  const LogoutKakao = () => {
    if (!Kakao.Auth.getAccessToken()) {
      alert('로그아웃을 실패했습니다.');
      return;
    }
    Kakao.Auth.logout(function () {
      alert('로그아웃 되었습니다.');
      navigate('/login');
    });

    localStorage.removeItem('access_token');
    sessionStorage.removeItem('isHost');
  };

  return (
    <NavContainer>
      <NavWrap>
        <MenuList>
          <Link to="/">
            <Img src="/images/logo.png" alt="logo" className="logoImg" />
          </Link>
          <NavItem>
            <Link to="/">남의집 둘러보기</Link>
          </NavItem>
          <NavItem>
            <Link to={isHost ? '/host' : '/register-host'}>남의집 호스트</Link>
          </NavItem>
        </MenuList>
        <MenuList>
          <NavItem>
            <i className="fas fa-search" />
          </NavItem>
          {token ? (
            <NavItem onClick={LogoutKakao}> 로그아웃</NavItem>
          ) : (
            <NavItem>
              <Link to="/login">로그인 / 회원가입</Link>
            </NavItem>
          )}
        </MenuList>
      </NavWrap>
    </NavContainer>
  );
}
const NavContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #dbdbdb;
`;

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;

  .logoImg {
    width: 40px;
    margin-right: 50px;
  }
`;

const Img = styled.img`
  max-width: 26px;
  height: 40px;
`;

const NavItem = styled.li`
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.weightThin};
`;
