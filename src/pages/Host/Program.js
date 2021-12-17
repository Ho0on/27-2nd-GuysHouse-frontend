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
        <p>{detail}</p>
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
`;

const ThumbnailImgWrap = styled.div`
  width: 130px;
  height: 90px;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgramTitle = styled.h1`
  font-size: 24px;
`;

const LocationWrap = styled.div`
  display: flex;
`;

const LocationTitle = styled.p`
  color: #dbdbdb;
  margin-right: 30px;
`;
