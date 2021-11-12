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
	background: #2176be;
	transition: 0.5s;
	border-left: 5px solid #2176be;
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
	margin-bottom: 10px;
	font-size: 15px;
	padding-left: 10px;
`
function InformationBar({village, filter}) {
	const [showInfor, setShowInfor] = useState(false)

	useEffect(() => {
		setShowInfor(village && filter);
	},[village,filter]);

  return (
    <Container style={{display:filter ? "" : "none" }}>
			{showInfor &&
				<ul>
					{ filter === "location" && 
						<li>
							<Title> Vị trí địa lý</Title>
							<Property>
								Vị trí chiến lược:
							</Property>
							<Content>
								{data[village][filter].criticalPosition}
							</Content>
							<Property>
								Địa hình địa chất:
							</Property>
							<Content>
								{data[village][filter].geologicalTopography.topographic}
							</Content>
							<Content>
								{data[village][filter].geologicalTopography.geological}
							</Content>
						</li>
					}
					{ filter === "area" && 
						<li>
							<Title> Diện tích </Title>
							<Property>
								Diện tích toàn tỉnh/thành phố:
							</Property>
							<Content>
								{data[village][filter].areaProvince}
							</Content>
							<Property>
								Diện tích đất nông nghiệp, thương mại, dịch vụ:
							</Property>
							<Content>
								{data[village][filter].economy}
							</Content>
							<Property>
								Diện tích nông lâm ngư nghiệp:
							</Property>
							<Content>
								{data[village][filter].culture}
							</Content>
						</li>
					}
					{ filter === "climate" && 
						<li>
							<Title> Khí hậu </Title>
							<Property>
								Đặc điểm chung:
							</Property>
							<Content>
								{data[village][filter].general}
							</Content>
							<Property>
								Nhiệt độ trung bình năm:
							</Property>
							<Content>
								{data[village][filter].temperature}
							</Content>
							<Property>
								Độ ẩm trung bình năm:
							</Property>
							<Content>
								{data[village][filter].humidity}
							</Content>
							<Property>
								Lượng mưa trung bình năm:
							</Property>
							<Content>
								{data[village][filter].rainfall}
							</Content>
						</li>
					}
					{ filter === "economic" && 
						<li>
							<Title> Tình hình kinh tế </Title>
							<Property>
								GDP:
							</Property>
							<Content>
								{data[village][filter].GDP.cultivation}
							</Content>
						</li>
					}
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