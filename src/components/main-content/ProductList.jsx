import React from 'react'
import styled from 'styled-components';

const ProductList = ({ products }) => {
  console.log('products', products)
  return (
    <GridContainer >
      {products.map((product) => (
        <ProductContainer key={product.id} >
          <ImgCover>
            <img src={product.thumbnail} />
          </ImgCover>
          <Detail>
            <Description>{product.description}</Description>
            <Tag>

            </Tag>
            <PriceAndStock>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#EE4D2D', fontSize: '12px' }}>
                  ฿</p>
                <p style={{ color: '#EE4D2D', fontSize: '16px' }}>
                  {product.price}</p>
              </div>
              <p style={{ color: 'rgba(0,0,0,.54118)', fontSize: '12px' }}>ขายแล้ว {product.stock} ชิ้น</p>
            </PriceAndStock>

          </Detail>
          <Discount>-{Math.floor(product.discountPercentage)}%</Discount>
          <Hint>แนะนำ</Hint>
        </ProductContainer>
      ))}
    </GridContainer>
  )
}

export default ProductList

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  place-items: center; 
  @media (min-width: 370px) {

    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 576px) {

    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {

    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {

    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {

    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProductContainer = styled.div`
  position: relative;
  width: 200px;
  background-color: white;
  padding: 5px;
  box-shadow: 3px 1px 12px 2px rgba(145,145,145,0.77);
  -webkit-box-shadow: 3px 1px 12px 2px rgba(145,145,145,0.77);
  -moz-box-shadow: 3px 1px 12px 2px rgba(145,145,145,0.77);
  margin-top: 10px;
  transition: transform 0.3s ease-in-out;
  

  &:hover {
    transform: scale(1.02); 
  }
`;

const ImgCover = styled.div`
  display: flex;
  height: 186px;
  width: 186px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    max-height: 100%;
    display: block;
    box-shadow: 7px 8px 13px -2px rgba(120,119,119,0.84);
  -webkit-box-shadow: 7px 8px 13px -2px rgba(120,119,119,0.84);
  -moz-box-shadow: 7px 8px 13px -2px rgba(120,119,119,0.84);
  }
`
const Detail = styled.div`
  padding: 0.5rem;
`
const Description = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8rem;
    height: 3.6rem;
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

`

const PriceAndStock = styled.div`
  
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Tag = styled.div`


`

const Discount = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 18px;
    width: 36px;
    background-color: rgba(255, 216, 64, 0.94);
    text-align: center;
    border-top-right-radius: 2px;
    font-size: 12px;
    color: red;
    padding: 0.125rem 0.25rem 0.125rem 0.25rem;
    overflow: hidden;
    white-space: nowrap;

`

const Hint = styled.div`
    position: absolute;
    width: auto;
    height: 18px;
    top: 10px;
    left: -10px;
    background-color: #ee4d2d;
    font-size: 12px;
    font-weight: 500;
   
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 0.125rem 0.25rem 0.125rem 0.25rem;
    color: #ffffff;
`