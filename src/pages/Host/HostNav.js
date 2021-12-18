import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HostNav() {
  return (
    <HostSideNav>
      <HostNavList>
        <Link to="/host">
          <li>남의집 관리</li>
        </Link>
        <Link to="/host/create">
          <li>남의집 만들기</li>
        </Link>
      </HostNavList>
    </HostSideNav>
  );
}

const HostSideNav = styled.div`
  width: 180px;
  height: 100vh;
  padding-top: 30px;
  font-size: 14px;
  font-weight: ${props => props.theme.weightRegular};
  color: #8e8e8e;
`;

const HostNavList = styled.ul`
  height: 100%;

  li {
    padding: 20px;

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;
