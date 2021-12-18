import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from '../../components/InputBox/InputBox';
import { API_ADDRESS } from '../../apiconfig';
import { CATEGORY_DATA, INPUT_DATA } from './CreateHostData';

export default function MakeHost() {
  const [createPlaceData, setCreatePlaceData] = useState({
    name: '',
    description: '',
    address: '',
    startDate: '',
    runningTime: 0,
    price: 0,
    limit: 0,
    supply: '',
  });
  const [categoryCheckList, setCategoryCheckList] = useState([]);
  const [uploadImgFiles, setUploadImgFiles] = useState(null);
  const [myImage, setMyImage] = useState([]);

  const {
    name,
    description,
    address,
    supply,
    price,
    limit,
    startDate,
    runningTime,
  } = createPlaceData;

  const handlePlaceInput = e => {
    const { name, value } = e.target;
    setCreatePlaceData({ ...createPlaceData, [name]: value });
  };

  const onCheckedElement = (checked, categoryId) => {
    const newCheckList = checked
      ? [...categoryCheckList, categoryId]
      : categoryCheckList.filter(el => el !== categoryId);
    setCategoryCheckList(newCheckList);
  };

  const handleImg = e => {
    setUploadImgFiles(e.target.files);
    const nowSelectImageList = e.target.files;
    const nowImageURLLIST = [...myImage];
    for (let i = 0; i < nowSelectImageList.length; i++) {
      nowImageURLLIST.push(URL.createObjectURL(nowSelectImageList[i]));
    }
    setMyImage(nowImageURLLIST);
  };

  const submitPlace = () => {
    const formData = new FormData();
    formData.append('categories', categoryCheckList);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('start_date', startDate);
    formData.append('running_time', runningTime);
    formData.append('price', price);
    formData.append('limit', limit);
    formData.append('supply', supply);
    formData.append('thumbnail_image', uploadImgFiles[0]);
    for (let i = 0; i < uploadImgFiles.length; i++) {
      formData.append('detail_image', uploadImgFiles[i]);
    }
    fetch(API_ADDRESS.programs, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(result => result.message === 'SUCCESS');
  };

  return (
    <CreateHostWrap>
      <div className="formWrap">
        <HeadTitle>남의집 정보 입력하기</HeadTitle>
        <SubTitle>카테고리</SubTitle>
        <CategoryList>
          {CATEGORY_DATA.map(el => {
            return (
              <CategoryItem key={el.id}>
                <CategoryLabel
                  className={categoryCheckList.includes(el.id) && 'checkOn'}
                >
                  <i class="fas fa-check" />
                  &nbsp;
                  <input
                    type="checkbox"
                    className="checkInput"
                    onChange={e => onCheckedElement(e.target.checked, el.id)}
                    checked={categoryCheckList.includes(el.id) ? true : false}
                  />
                  {el.content}
                </CategoryLabel>
              </CategoryItem>
            );
          })}
        </CategoryList>
        {INPUT_DATA.map((el, index) => {
          return (
            <InputBox
              key={index}
              type={el.type}
              placeholder={el.placeholder}
              title={el.title}
              name={el.name}
              onChange={handlePlaceInput}
            />
          );
        })}
        <div>
          <SubTitle>공간 이미지</SubTitle>
          <div className="inputImgBox">
            <ImgPreview>
              {uploadImgFiles ? (
                myImage.map(el => {
                  return (
                    <ImgPreviewItem key={el.id}>
                      <Img src={el} accept="image/*" alt="thumbnail" />
                    </ImgPreviewItem>
                  );
                })
              ) : (
                <li>1장 이상의 공간 이미지를 등록해주세요.</li>
              )}
            </ImgPreview>
            <FileLabel>
              사진 업로드
              <input
                type="file"
                onChange={handleImg}
                multiple
                className="fileInput"
              />
            </FileLabel>
          </div>
        </div>
        <SubmitBtn onClick={submitPlace}>공간 만들기</SubmitBtn>
      </div>
    </CreateHostWrap>
  );
}

const CreateHostWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #fbfaf8;

  .formWrap {
    width: 70%;
    margin: 20px 0;

    .inputImgBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 20px;
      border: 1px solid #8e8e8e;
      border-radius: 4px;
      background-color: #f6f6f6;
      overflow-x: scroll;
    }
  }
`;

const HeadTitle = styled.h1`
  padding: 20px 0 10px 0;
  font-size: 26px;
  font-weight: ${props => props.theme.weightSemiBold};
`;

const SubmitBtn = styled.button`
  width: 100%;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #fe8255;
`;

const ImgPreview = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  overflow-x: scroll;
`;

const ImgPreviewItem = styled.li`
  width: 300px;
  margin: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const FileLabel = styled.label`
  background-color: #fe8255;
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;

  .fileInput {
    display: none;
  }
`;

const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px 30px 0px;
`;

const CategoryItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const CategoryLabel = styled.label`
  display: block;
  padding: 10px;
  border: 2px solid gray;
  background-color: white;
  border-radius: 4px;
  color: gray;

  .checkInput {
    display: none;
  }

  &.checkOn {
    border: 1px solid #fe8255;
    background-color: #fe8255;
    color: white;
  }
`;

const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0 14px 0;
`;
