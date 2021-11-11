import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import data from '../../asset/data/data.json'



const Container = styled.div`   
	padding: 10px 0 10px 10px;
	box-sizing: border-box;
	height: calc(100% - 60px);
	width: 300px;
	background: #4d5bf9;
	transition: 0.5s;
	border-left: 5px solid #4d5bf9;
	position: absolute;
	right: 0;
	font-family: initial;
	color: white;
`;
const Title = styled.div`
	font-size: 25px;
	font-weight: bold;
	margin: 20px 15px 20px 0px;
	padding: 10px 0 10px 0;
	border: 1px solid;
	border-radius: 6px;
	background: rgb(0 191 255);
	text-align: center;
`
const Property = styled.div`
	font-size: 20px;
	margin-bottom: 10px;
`
const Content = styled.p`
	line-height: normal;
`
function InformationBar({village, filter}) {
	const [showInfor, setShowInfor] = useState(false)

	useEffect(() => {
		setShowInfor(village && filter);
	},[village,filter]);

  return (
    <Container>
			{showInfor &&
				<ul>
					<li style={{display: filter === "location" ? "block" : "none"}}>
						<Title> Vị trí địa lý</Title>
						<Property>
							Vị trí chiến lược:
						</Property>
						<Content>
							{data[village][filter].criticalPosition}
						</Content>
					</li>
					<li style={{display: filter === "area" ? "block" : "none"}}>
						<Title> Diện tích</Title>
						<Property>
							Vị trí chiến lược:
						</Property>
						<Content>
							{data[village][filter].criticalPosition}
						</Content>
					</li>
				</ul>				
			}
    </Container>
		
  )
}

InformationBar.propTypes = {
	village: PropTypes.string,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
    village: state.village,
		filter: state.filter,
});
  
const mapDispatchToProps = {

};
  
export default connect(mapStateToProps, mapDispatchToProps)(InformationBar);