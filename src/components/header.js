import React from 'react'
import styled from 'styled-components';
import logo from '../asset/image/logoReact.png'

const BannerHome = styled.div`
  min-height: 60px;
  display: flex;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  background: linear-gradient(to right, #2176bd, #2176be);
  justify-content: space-between;
`
const Item = styled.div`
  display: flex;
  align-items: center;
`
const Image = styled.img`
  height: 40px;
  padding: 0 20px 0 20px;
  cursor: pointer;
`
const Span = styled.span`
  font-weight: 500;
  font-size: 25px;
  color: white;
  padding: 0 20px 0 0;
  font-family: serif;
`
const Title = "Bản đồ thông tin các tỉnh thành Việt Nam";
const NumberLabel = "Đường dây nóng:";
const NumberPhone = "123.456789 - 987.654321";

function Header() {
  return (
    <BannerHome>
      <Item>
        <Image src={logo} alt="" />
        <Span>
          {Title}
        </Span>
      </Item>
      <Item>
        <Span>
          {NumberLabel}
        </Span>
        <Span>
          {NumberPhone}
        </Span>
      </Item>
    </BannerHome>
  )
}

export default Header