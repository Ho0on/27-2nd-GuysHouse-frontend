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

  console.log(programData);

  return (
    <ManageHostWrap>
      <ManageBox>
        <AllProgramsBox>
          {programData &&
            programData.map(el => {
              return (
                <Program
                  key={el.id}
                  title={el.title}
                  detail={el.detail}
                  address={el.address}
                  thumbnailImg={el.thumbnailImg}
                />
              );
            })}
        </AllProgramsBox>
      </ManageBox>
      <RightBox>
        <ProfileBox>asdf</ProfileBox>
      </RightBox>
    </ManageHostWrap>
  );
}

const ManageHostWrap = styled.div`
  display: flex;
  padding: 70px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid red;
`;

const ManageBox = styled.section`
  display: flex;
  margin-right: 50px;
`;

const RightBox = styled.section`
  display: flex;
  width: 320px;
`;

const AllProgramsBox = styled.div`
  border: 1px solid #dbdbdb;
  width: 100%;
`;

const ProfileBox = styled.div`
  width: 100%;
  border: 1px solid #dbdbdb;
`;

const Img = styled.img`
  width: 100%;
`;
