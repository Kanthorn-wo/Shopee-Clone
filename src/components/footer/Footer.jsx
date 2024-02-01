import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const paymentMockUp = [
    { id: 1, imageUrl: 'https://down-th.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06' },
    { id: 2, imageUrl: 'https://down-th.img.susercontent.com/file/c21d34c0a31c00441daf05a97f96df38' },
    { id: 3, imageUrl: 'https://down-th.img.susercontent.com/file/af82ae9d9ee79d1a064d6496896440ca' },
    { id: 4, imageUrl: 'https://down-th.img.susercontent.com/file/080424831b3a3dbe82af85852f675831' },
    { id: 5, imageUrl: 'https://down-th.img.susercontent.com/file/90d3cf6f82d3a1a74c84ab5f876583cb' },
    { id: 6, imageUrl: 'https://down-th.img.susercontent.com/file/6e7e289bab75472a86d03bb11e2c9baa' },
    { id: 7, imageUrl: 'https://down-th.img.susercontent.com/file/8335a80af33fb390d580cb3c57ef4330' },
    { id: 8, imageUrl: 'https://down-th.img.susercontent.com/file/0af0045814cb152488cfcd6921e0ab64' },
    { id: 9, imageUrl: 'https://down-th.img.susercontent.com/file/734b42470f38e756615738cd5111d139' },
    { id: 10, imageUrl: 'https://down-th.img.susercontent.com/file/c04844650bc89dac624eab8026caa276' },
    { id: 11, imageUrl: 'https://down-th.img.susercontent.com/file/th-50009109-610807e056e0e5d16f8b063d89ff4a22' },
    { id: 12, imageUrl: 'https://down-th.img.susercontent.com/file/th-50009109-8c421b69876d8da18d39213c533408da' },


  ];
  const deliveryMockUP = [
    { id: 1, imageUrl: 'https://down-th.img.susercontent.com/file/th-50009109-d75347c83dcad93b78214382e9e55774' },
    { id: 2, imageUrl: 'https://down-th.img.susercontent.com/file/8c07eb5612750efd0d2e7bfb34a09099' },
    { id: 3, imageUrl: 'https://down-th.img.susercontent.com/file/ab1e8cd2988eecf57ea4bb44b48dc1dd' },
    { id: 4, imageUrl: 'https://down-th.img.susercontent.com/file/a136bea64c68258a5a0c8263e4f8104f' },
    { id: 5, imageUrl: 'https://down-th.img.susercontent.com/file/ee847678378381b73678fd01dc0dc3b3' },
    { id: 6, imageUrl: 'https://down-th.img.susercontent.com/file/09442b3b2b135f8b6509eb3f67ef9f1c' },
    { id: 7, imageUrl: 'https://down-th.img.susercontent.com/file/09442b3b2b135f8b6509eb3f67ef9f1c' },


  ];


  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <p style={{ fontWeight: '700', fontSize: '0.75rem' }} className='mb-4'>ศูนย์ช่วยเหลือ</p>
          <div style={{ fontSize: '12px' }}>
            <p>Help Centre</p>
            <p>สั่งซื้อสินค้าอย่างไร</p>
            <p>เริ่มขายสินค้าอย่างไร</p>
            <p>ช่องทางการชำระเงินใน Shopee</p>
            <p>Shopee Coins</p>
            <p>การคืนเงินและคืนสินค้า</p>
            <p>การันตีโดย Shopee คืออะไร?</p>
            <p>ติดต่อ Shopee</p>
          </div>
        </div>
        <div>
          <p style={{ fontWeight: '700', fontSize: '0.75rem' }} className='mb-4'>เกี่ยวกับ SHOPEE</p>
          <div style={{ fontSize: '12px' }}>
            <p>เกี่ยวกับเรา</p>
            <p>โปรแกรม Affiliate</p>
            <p>ร่วมงานกับเรา</p>
            <p>นโยบายของ Shopee</p>
            <p>นโยบายความเป็นส่วนตัว</p>
            <p>Shopee Blog</p>
            <p>Shopee Mall</p>
            <p>Seller Centre</p>
            <p>Flash Deals</p>
            <p>ผู้ติดต่อออนไลน์</p>
          </div>
        </div>

        <div>
          <p style={{ fontWeight: '700', fontSize: '0.75rem' }} className='mb-4'>วิธีการชำระเงิน</p>
          <PayGrid style={{ fontSize: '12px' }}>
            {paymentMockUp.map(item => (
              <div key={item.id}
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'

                }}>
                <img src={item.imageUrl} alt={`img ${item.id}`} />
              </div>
            ))}
          </PayGrid>

          <p style={{ fontWeight: '700', fontSize: '0.75rem' }} className='mt-4'>บริการจัดส่ง</p>
          <PayGrid style={{ fontSize: '12px' }}>
            {deliveryMockUP.map(item => (
              <div key={item.id}
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'

                }}>
                <img src={item.imageUrl} alt={`img ${item.id}`} />
              </div>
            ))}
          </PayGrid>
        </div>

        <Social>
          <p style={{ fontWeight: '700', fontSize: '0.75rem' }} >ติดตามเรา</p>
          <SocialText>
            <FaFacebook />
            <span >Facebook</span>
          </SocialText>
          <SocialText>
            <FaInstagramSquare />
            <span >Instagram</span>
          </SocialText>
          <SocialText>
            <FaLine />
            <span >Line</span>
          </SocialText>
          <SocialText>
            <FaLinkedin />
            <span >Linkedin</span>
          </SocialText>
        </Social>
        <div>
          <p style={{ fontWeight: '700', fontSize: '0.75rem' }} >ดาวน์โหลดแอปพลิเคชั่น</p>
          <div style={{ display: 'flex' }}>
            <div>
              <img src='https://down-th.img.susercontent.com/file/9e8c9401e9e2d5d7d23191ced60b510b'></img>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <img src="https://down-th.img.susercontent.com/file/ed6fcd311cab7abf948d7cd81929c53e"></img>
              <img src="https://down-th.img.susercontent.com/file/6be5f60baa027fff58b1b16d44e28a66"></img>
              <img src="https://down-th.img.susercontent.com/file/038f533c8d76c728fb64c57ab00a12d6"></img>
            </div>
          </div>
        </div>
      </FooterGrid>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 0 40px 0' }}>
        <div>© 2024 Shopee. All Rights Reserved</div>
        <div>
          Country & Region:
          สิงคโปร์
          อินโดนีเซีย
          ไทย
          มาเลเซีย
          เวียดนาม
          ฟิลิปปินส์
          บราซิล
          เม็กซิโก
          โคลัมเบีย
          ชิลี
          ไต้หวัน
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

const PayGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`
const Social = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`

const SocialText = styled.div`
  display: flex;
  align-items: center;
  
`