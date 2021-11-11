import React, {useCallback, useState} from 'react'
import styled from 'styled-components';
import Select from 'react-select'

import {ImLocation} from 'react-icons/im';
import {BiArea} from 'react-icons/bi';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import {GiVillage} from 'react-icons/gi';

const options = [
    { value: 'haiduong', label: 'Hải Dương' },
    { value: 'haiduong', label: 'Hải Dương' },
    { value: 'haiduong', label: 'Hải Dương' },
  ]

const Container = styled.div`   
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    margin: 10px 0 0 0;
    height: calc(100% - 90px);
    width: 250px;
    background: #4d5bf9;
    transition: 0.5s;
    border-left: 5px solid #4d5bf9;
    position: absolute;
`;
const Nav = styled.ul`
    margin: 0;
    padding: 0;
    margin: 0 0 300px 0;
    li {
        list-style: none;
        width: 215px;
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
    left: "90%",
    width: "35px",
    height: "35px",
    color: "white",
}
const styleArrowRight = {
    ...styleArrowLeft,
    left: "60%",
}
const styleIconVillage = {
    ...styleIcon,
    marginBottom: "3px"
}
const customStyles = {
    control: (provided,state) => ({
        ...provided,
        width: 218,
        marginTop: 10,
        display: state.selectProps.display,
        transition: "0.5s",
    }),
  }
  
function SideBar() {
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
    });
    const onClickHandleShowSideBar = useCallback(() => {
        setShowSideBar(!showSideBar);
    })
  return (
    <Container className={showSideBar? "": "_container-sidebar"}>
        <Select 
            options={options} 
            placeholder="Province"
            styles={customStyles}
            display={showSideBar ? "flex" : "none"}
        /> 
        <Nav>
            {!showSideBar &&
            <li className="" id="0" onClick={onCLickHandle}>
                <a href="#" id="0">
                    <GiVillage style={styleIconVillage} id="0"/>
                </a>
            </li>
            }
            <li className="" id="1" onClick={onCLickHandle}>
                <a href="#" id="1">
                    <ImLocation style={styleIcon} id="1"/>
                    <Title className="title" id="1">Location</Title>
                </a>
            </li>
            <li className="" id="2" onClick={onCLickHandle}>
                <a href="#" id="2">
                    <BiArea style={styleIcon} id="2"/>
                    <Title className="title" id="2" >Area</Title>
                </a>
            </li>
            <li className="" id="3" onClick={onCLickHandle}>
                <a href="#" id="3">
                    <TiWeatherPartlySunny style={styleIcon} id="3"/>
                    <Title className="title" id="3">Climate</Title>
                </a>
            </li>
            <li className="" id="4" onClick={onCLickHandle}>
                <a href="#" id="4">
                    <RiMoneyDollarCircleLine style={styleIcon}id="4" />
                    <Title className="title" id="4">Economic</Title>
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

export default SideBar