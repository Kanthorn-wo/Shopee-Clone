import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const SlideImg = () => {

  const carouselMockupData = [
    { id: 1, value: 'https://cf.shopee.co.th/file/th-50009109-e9e68b8c97327434b0601b2340e77096_xxhdpi' },
    { id: 2, value: 'https://cf.shopee.co.th/file/th-50009109-526accef9ac008d2cb129be94d1dbb4b_xxhdpi' },
    { id: 3, value: 'https://cf.shopee.co.th/file/th-50009109-3651d222bf5a77604cf4114d7310c554_xxhdpi' },

  ];

  const menuItemsMockupData = [
    { id: 1, icon: 'https://cf.shopee.co.th/file/th-50009109-dc09ce0f3eee0303db1753ec78f1a2be_xhdpi', text: 'ส่งฟรี*ทุกวัน' },
    { id: 2, icon: 'https://cf.shopee.co.th/file/th-50009109-bf1707cfcb37063ae791f73375613849_xhdpi', text: 'ช้อปปี้เทรนด์ฮิต' },
    { id: 3, icon: 'https://cf.shopee.co.th/file/th-50009109-a513d09c3a7f6c0e4c5e0f7cc778daf7_xhdpi', text: 'Shopee Mall' },
    { id: 4, icon: 'https://cf.shopee.co.th/file/th-50009109-4aa07f992f58d87251a7e51db3704a2b_xhdpi', text: 'อิเล็กทรอนิกส์' },
    { id: 5, icon: 'https://cf.shopee.co.th/file/th-50009109-4304a66dc47be534cc4fc18eaf945c5a_xhdpi', text: 'Hobbies & Lifestyle' },
    { id: 6, icon: 'https://cf.shopee.co.th/file/th-50009109-c255b82019f4fa5b33da339d8d1f839d_xhdpi', text: 'ลูกค้าใหม่ รับโค้ดหรือของขวัญ ฟรี' },
    { id: 7, icon: 'https://cf.shopee.co.th/file/th-50009109-d04a36aa08888fcfb5458c72f18d0c2b_xhdpi', text: 'ซูเปอร์มาร์เก็ต' },
    { id: 8, icon: 'https://cf.shopee.co.th/file/th-50009109-aeabf36909c9bb1f970de6685e73a602_xhdpi', text: 'เก็บคอยน์แลกโค้ด' },
    { id: 9, icon: 'https://cf.shopee.co.th/file/th-50009109-dc9108f7d758ee297aab7157c96e5bb1_xhdpi', text: 'ช้อปปี้โฮมม' },
    { id: 10, icon: 'https://cf.shopee.co.th/file/th-50009109-3bdb7794629696a11a0cc5c609cbd0b4_xhdpi', text: 'ช้อปปี้ถูกชัวร์' },
  ];
  return (
    <>
      <HeaderContainer />
      <MainContainer>
        <Wrap>
          <Box1>
            <Carousel>
              {carouselMockupData.map(({ id, value }, index) => (
                <Carousel.Item key={id}>
                  <img className="d-block w-100" src={value} alt={`Slide ${index + 1}`} />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Box1>
          <Box2>
            <img src="https://cf.shopee.co.th/file/th-50009109-2ecdfec894997eb9584e587fcf42a164_xhdpi" />
            <img src="https://cf.shopee.co.th/file/th-50009109-9d170de5facc869f15ad89a34273eede_xhdpi" />
          </Box2>
        </Wrap>

        <ContainerMenu>
          {menuItemsMockupData.map(({ id, icon, text }) => (
            <FrameItem key={id}>
              <IconLink>
                <Item>
                  <img src={icon} alt={`Menu Icon ${id}`} />
                </Item>
                <Text>{text}</Text>
              </IconLink>
            </FrameItem>
          ))}
        </ContainerMenu>

        <img src='https://cf.shopee.co.th/file/th-50009109-4511584405faf59f920c914b3bee8be5'
          style={{ maxWidth: '100%', marginTop: '20px' }}
          alt='banner' />


      </MainContainer>


    </>
  );
};

export default SlideImg;

const HeaderContainer = styled.div`
  height: 132px;
  width: 100%;
  background-color: red;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
  width: 100%;
  padding: 0;

  color: black;

`;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: stretch;

  @media (max-width:1200px) {
    flex-direction: column;
  }

`

const Box1 = styled.div`
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    max-height: 100%;
    display: block;
  }

`
const Box2 = styled.div`
  margin-left: 5px;
  ;
  @media (max-width:1200px) {
      margin-left: 0px;
      background-color: blue;
  }

  img {
    width: 100%; 
    max-width: 1200px; 
    height: auto; 
    display: block;
  }

`

const ContainerMenu = styled.ul`
    padding-left: 0;
    margin-top: 30px;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;

`
const FrameItem = styled.li`
  width: 100px;
  height: 90px;
`
const Text = styled.span`
    text-align: center;
    padding: 10px 0;
    color: #000000;
`

const Item = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #DADDDE;
  margin-bottom: 5px;

  img{
    width: 100%;
    max-height: 100%;
    display: block;
  }
`
const IconLink = styled.a`
    text-decoration: none;
    font-size: .8125rem;
    font-weight: 400;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
