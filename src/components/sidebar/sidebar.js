import React, {useCallback, useState} from 'react'
import styled from 'styled-components';
import Select from 'react-select'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { selectVillage, onclickFilter } from '../../actions';

import {ImLocation} from 'react-icons/im';
import {BiArea} from 'react-icons/bi';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import {GiVillage} from 'react-icons/gi';

const options = [
    { value: 'haiduong', label: 'Hải Dương' },
    { value: 'hungyen', label: 'Hưng Yên' },
    { value: 'bacgiang', label: 'Bắc Giang' },
  ]

const Container = styled.div`   
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    height: calc(100% - 60px);
    width: 260px;
    background: #2176bd;
    transition: 0.5s;
    border-left: 5px solid #2176bd;
    position: absolute;
`;
const Nav = styled.ul`
    margin: 0;
    padding: 0;
    margin: 0 0 300px 0;
    li {
        list-style: none;
        width: 230px;
        border-radius: 5px;
        margin-top: 10px;
        a {
            text-decoration: none;
            color: white;
            display: flex;
            align-items: center;
        }
        &:hover{
            background: #fff;
            opacity: 0.7;
            a{
                color: #333;
            }
        }
    }
`;
const Title = styled.span`
    white-space: normal;
    padding: 5px 20px 5px 30px;
`
const styleIcon = {
    minWidth: "25px",
    height: "25px",
    textAlign: "center",
    fontSize: "1.5rem",
    margin: "10px",
};

const styleArrowLeft = {
    position: "absolute",
    top: "50%",
    left: "80%",
    width: "35px",
    height: "35px",
    color: "white",
    padding: "10px"
}
const styleArrowRight = {
    ...styleArrowLeft,
    left: "60%",
}

const customStyles = {
    control: (provided,state) => ({
        ...provided,
        width: 218,
        margin: "10px 0 17px 0",
        display: state.selectProps.display,
        transition: "1s",
    }),
  }
  
function SideBar({selectVillageHandle, onclickFilterHandle}) {
    const [showSideBar, setShowSideBar] = useState(true);
    
    const onCLickHandle = useCallback((e) => {        
        const list = document.querySelectorAll('li');
        list.forEach((element) => {
            if(element.id === e.target.id){
                element.className = "_active";
            } else {
                element.className = "";
            };
        });
        onclickFilterHandle(e.target.id);
    });
    const onClickHandleShowSideBar = useCallback(() => {
        setShowSideBar(!showSideBar);
    })
    const onChangeSelectHandle = useCallback((e) => {
        selectVillageHandle(e.value);
    })
    const onClickVillageIcon = useCallback(() => {
        setShowSideBar(!showSideBar);
    })
  return (
    <Container className={showSideBar? "": "_container-sidebar"}>
        <Select 
            options={options} 
            placeholder="Province"
            styles={customStyles}
            display={showSideBar ? "flex" : "none"}
            onChange={onChangeSelectHandle}
        /> 
        <Nav>
            {!showSideBar &&
            <li className="" id="0" onClick={onCLickHandle}>
                <a href="#" id="0">
                    <GiVillage style={styleIcon} id="0" onClick={onClickVillageIcon}/>
                </a>
            </li>
            }
            <li className="" id="location" onClick={onCLickHandle}>
                <a href="#" id="location">
                    <ImLocation style={styleIcon} id="location"/>
                    <Title className="title" id="location">Vị Trí Địa Lý</Title>
                </a>
            </li>
            <li className="" id="area" onClick={onCLickHandle}>
                <a href="#" id="area">
                    <BiArea style={styleIcon} id="area"/>
                    <Title className="title" id="area" >Diện Tích</Title>
                </a>
            </li>
            <li className="" id="climate" onClick={onCLickHandle}>
                <a href="#" id="climate">
                    <TiWeatherPartlySunny style={styleIcon} id="climate"/>
                    <Title className="title" id="climate">Khí Hậu</Title>
                </a>
            </li>
            <li className="" id="economic" onClick={onCLickHandle}>
                <a href="#" id="economic">
                    <RiMoneyDollarCircleLine style={styleIcon}id="economic" />
                    <Title className="title" id="economic">Tình Hình Kinh Tế</Title>
                </a>
            </li>
        </Nav>
        { showSideBar ? 
            <MdKeyboardArrowLeft style={styleArrowLeft} onClick={onClickHandleShowSideBar}/> 
            : 
            <MdKeyboardArrowRight style={styleArrowRight} onClick={onClickHandleShowSideBar}/>
        } 
    </Container>
  )
}

SideBar.propTypes = {
    selectVillage: PropTypes.func,
    onclickFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
});
  
const mapDispatchToProps = {
    selectVillageHandle: selectVillage,
    onclickFilterHandle: onclickFilter,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);