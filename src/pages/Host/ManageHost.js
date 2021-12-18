import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Program from './Program';

export default function ManageHost() {
  const [programData, setProgramData] = useState();

  useEffect(() => {
    fetch('/data/ProgramListData.json')
      .then(res => res.json())
      .then(res => setProgramData(res));
  }, []);

  return (
    <ManageHostWrap>
      <ManageBox>
        <AllProgramsBox>
          <AllProgramHead>전체 남의집</AllProgramHead>
          <ProgramList>
            {programData &&
              programData.map(el => {
                return (
                  <Program
                    key={el.id}
                    title={el.title}
                    detail={el.detail}
                    address={el.address}
                    thumbnailImg={el.thumbnail_image}
                  />
                );
              })}
          </ProgramList>
        </AllProgramsBox>
      </ManageBox>
      <RightBox>
        <ProfileBox>
          <ProfileImgWrap>
            <Img src="/images/logo.png" />
          </ProfileImgWrap>
        </ProfileBox>
      </RightBox>
    </ManageHostWrap>
  );
}

const ManageHostWrap = styled.div`
  display: flex;
  padding: 50px;
  width: 100%;
  margin: 0 auto;
  background-color: #fbfaf8;
`;

const ManageBox = styled.div`
  display: flex;
  margin-right: 30px;
`;

const RightBox = styled.div`
  display: flex;
  width: 320px;
`;

const AllProgramsBox = styled.div`
  border: 1px solid #dbdbdb;
  width: 100%;
  overflow-y: scroll;
  position: relative;
`;

const AllProgramHead = styled.h1`
  padding: 20px 24px;
  border-bottom: 1px solid #dbdbdb;
  font-size: 18px;
  font-weight: 700;
`;

const ProgramList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ProfileBox = styled.div`
  width: 100%;
  border: 1px solid #dbdbdb;
`;

const ProfileImgWrap = styled.div`
  width: 50px;
  width: 50px;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 100%;
`;
