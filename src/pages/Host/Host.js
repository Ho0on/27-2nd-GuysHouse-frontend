import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HostNav from './HostNav';
import CreateHost from './CreateHost';
import ManageHost from './ManageHost';

export default function Host() {
  return (
    <HostWrap>
      <LeftNav>
        <HostNav />
      </LeftNav>
      <Routes>
        <Route path="/" element={<ManageHost />} />
        <Route path="/create" element={<CreateHost />} />
      </Routes>
    </HostWrap>
  );
}

const HostWrap = styled.div`
  display: flex;
  max-width: 1150px;
  margin: 0 auto;
`;

const LeftNav = styled.div`
  border-right: 1px solid #dbdbdb;
`;
