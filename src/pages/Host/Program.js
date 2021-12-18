import React from 'react';
import styled from 'styled-components';

export default function Program({ title, detail, address, thumbnailImg }) {
  return (
    <ProgramWrap>
      <ThumbnailImgWrap>
        <ThumbnailImg src={thumbnailImg} alt="" />
      </ThumbnailImgWrap>
      <ContentBox>
        <ProgramTitle>{title}</ProgramTitle>
        <ProgramDescription>{detail}</ProgramDescription>
        <LocationWrap>
          <LocationTitle>장소</LocationTitle>
          <p>{address}</p>
        </LocationWrap>
      </ContentBox>
    </ProgramWrap>
  );
}

const ProgramWrap = styled.li`
  display: flex;
  width: 100%;
  padding: 30px 20px 0 20px;
`;

const ThumbnailImgWrap = styled.div`
  width: 130px;
  height: 90px;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0px 5px 20px;
`;

const ProgramTitle = styled.h1`
  font-size: 19px;
`;

const ProgramDescription = styled.p`
  margin: 5px 0;
  font-size: 15px;
`;

const LocationWrap = styled.div`
  display: flex;
  font-size: 15px;
`;

const LocationTitle = styled.p`
  color: gray;
  margin-right: 20px;
`;
