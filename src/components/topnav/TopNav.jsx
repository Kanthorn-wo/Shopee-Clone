import React from 'react'
import styled from 'styled-components'
import ItemRow1 from './ItemRow1';
import ItemRow2 from './ItemRow2';


const TopNav = () => {
  return (
    <>
      <HeaderWrapper>
        <ContainerNav>
          <Row1>
            <ItemRow1 />
          </Row1>
          <Row2>
            <ItemRow2 />
          </Row2>

        </ContainerNav>
      </HeaderWrapper>
    </>


  )
}

export default TopNav

const HeaderWrapper = styled.header`
    background: linear-gradient(-180deg,#f53d2d,#f63);
    transition: transform .2s cubic-bezier(.4,0,.2,1);
    position: fixed;
    z-index: 9999;
    width: 100%;
    color: #ffffff;
    min-width: 1200px;
`
const ContainerNav = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
`

const Row1 = styled.div`
  margin-top: 8px;
`
const Row2 = styled.div`

`