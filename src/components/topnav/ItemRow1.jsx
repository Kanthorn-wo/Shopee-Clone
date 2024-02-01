import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
const ItemRow1 = () => {
  return (
    <Container>
      <CustomStyledUl>
        <li>
          Seller Centre
        </li>
        <li>
          เริ่มต้นขายสินค้า
        </li>
        <li>
          ดาวน์โหลด
        </li>
        <li>
          ติดตามเราบน

        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLine />
        </li>
      </CustomStyledUl>
      <CustomStyledUl>
        <li></li>

      </CustomStyledUl>

      <CustomStyledUl>
        <li><HiOutlineBellAlert />การแจ้งเตือน</li>
        <li><IoHelpCircleOutline />ช่วยเหลือ</li>
        <li><GrLanguage />ไทย</li>
        <li><FaRegUserCircle />Username</li>
      </CustomStyledUl>
    </Container>
  )
}

export default ItemRow1

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const CustomStyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  li {
    display: inherit;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
  }
`
