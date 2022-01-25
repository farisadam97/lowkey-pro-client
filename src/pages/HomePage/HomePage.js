import './HomePage.css'
import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import imghomebg from '../../images/features.jpg';

import React, { useState } from 'react';

const HomePage = () => {
	
	const [isOpened1, setIsOpened1] = useState(false);
	const [isOpened2, setIsOpened2] = useState(false);
	const [isOpened3, setIsOpened3] = useState(false);
	const [isOpened4, setIsOpened4] = useState(false);

	function toggle1() {
		setIsOpened1(wasOpened => !wasOpened);
		setIsOpened2(false);
		setIsOpened3(false);
		setIsOpened4(false);
	}
	function toggle2() {
		setIsOpened1(false);
		setIsOpened2(wasOpened => !wasOpened);
		setIsOpened3(false);
		setIsOpened4(false);
	}
	function toggle3() {
		setIsOpened1(false);
		setIsOpened2(false);
		setIsOpened3(wasOpened => !wasOpened);
		setIsOpened4(false);
	}
	function toggle4() {
		setIsOpened1(false);
		setIsOpened2(false);
		setIsOpened3(false);
		setIsOpened4(wasOpened => !wasOpened);
	}
	var currentuser_name = localStorage.getItem('name')
    return (
		<div>
			<ResponsiveAppBar />
			
			<div class="page-home" style={{ backgroundImage: 'url(' + imghomebg + ')'}}>
				<Container maxWidth="xl">
					<div>
						<div class="desktopalignright">
							<Typography variant="h3" color="#1976d2"
								fontSize={{
									lg: 50,
									md: 40,
									sm: 30,
									xs: 20
								}}
							>
								Welcome {currentuser_name}!
							</Typography> 
							<Typography color="white"
								fontSize={{
									lg: 24,
									md: 20,
									sm: 16,
									xs: 12
								}}
							>
								What do you want to do today?
							</Typography>
						</div>
						<br />
						<div class="mobile-full" style={{ display:"flex" }}>
							
							<div class="home-left">
								
								{isOpened1 && (
									<div class="box-content">
										<Typography variant="h4" color="#1976d2"
											fontSize={{
												lg: 32,
												md: 28,
												sm: 24,
												xs: 20
											}}
										>
											View & Edit Profile
										</Typography>
										<br /><br />
										<Typography color="white"
										fontSize={{
												lg: 24,
												md: 20,
												sm: 16,
												xs: 12
											}}
										>
											Visit the page to view your profile and edit the information.
										</Typography>
										<br /><br />
										<Link to="/profile" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></Link>
									</div>
								)}
								{isOpened2 && (
									<div class="box-content">
										<Typography variant="h4" color="#1976d2"
											fontSize={{
												lg: 32,
												md: 28,
												sm: 24,
												xs: 20
											}}
										>
											Play Games
										</Typography>
										<br /><br />
										<Typography color="white"
										fontSize={{
												lg: 24,
												md: 20,
												sm: 16,
												xs: 12
											}}
										>
											Come enjoy the finest gaming experience on a website designed with you in mind. <br /><br />The fun starts here!
										</Typography>
										<br /><br />
										<Link to="/game-list" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></Link>
									</div>
								)}
								{isOpened3 && (
									<div class="box-content">
										<Typography variant="h4" color="#1976d2"
											fontSize={{
												lg: 32,
												md: 28,
												sm: 24,
												xs: 20
											}}
										>
											Games History
										</Typography>
										<br /><br />
										<Typography color="white"
										fontSize={{
												lg: 24,
												md: 20,
												sm: 16,
												xs: 12
											}}
										>
											View the history of the games you have played.
										</Typography>
										<br /><br />
										<Link to="/game-history" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></Link>
									</div>
								)}
								{isOpened4 && (
									<div class="box-content">
										<Typography variant="h4" color="#1976d2"
											fontSize={{
												lg: 32,
												md: 28,
												sm: 24,
												xs: 20
											}}
										>
											Top Score
										</Typography>
										<br /><br />
										<Typography color="white"
										fontSize={{
												lg: 24,
												md: 20,
												sm: 16,
												xs: 12
											}}
										>
											Check out who got the highest score and the rankings.
										</Typography>
										<br /><br />
										<Link to="/top-score" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></Link>
									</div>
								)}
							</div>
							<div class="home-right">
								
								<div class="home-page-boxes">
									<Link to="#" style={{ textDecoration: 'none' }} onClick={toggle1}>
										<div>
											<i className='fa fa-user'></i>
											<Typography marginTop={1}
												fontSize={{
													lg: 30,
													md: 30,
													sm: 20,
													xs: 14
												}}
											>
												<Button variant="contained" style={{padding:'10px 20px'}}>View & Edit Profile</Button>
											</Typography>
										</div>
									</Link>
									<Link to="#" style={{ textDecoration: 'none' }} onClick={toggle2}>
										<div>
											<i className='fa fa-gamepad'></i>
											<Typography marginTop={1}
												fontSize={{
													lg: 30,
													md: 30,
													sm: 20,
													xs: 14
												}}
											>
												<Button variant="contained" style={{padding:'10px 20px'}}>Play Games</Button>
											</Typography>
										</div>
									</Link>
									<Link to="#" style={{ textDecoration: 'none' }} onClick={toggle3}>
										<div>
											<i className='fa fa-history'></i>
											<Typography marginTop={1}
												fontSize={{
													lg: 30,
													md: 30,
													sm: 20,
													xs: 14
												}}
											>
												<Button variant="contained" style={{padding:'10px 20px'}}>View Games History</Button>
											</Typography>
										</div>
									</Link>
									<Link to="#" style={{ textDecoration: 'none' }} onClick={toggle4}>
										<div>
											<i className='fa fa-trophy'></i>
											<Typography marginTop={1}
												fontSize={{
													lg: 30,
													md: 30,
													sm: 20,
													xs: 14
												}}
											>
												<Button variant="contained" style={{padding:'10px 20px'}}>View Top Score</Button>
											</Typography>
										</div>
									</Link>
								</div>
							</div>
							
							<div style={{ clear: 'both' }}></div>
						</div>
					</div>
				</Container>
			</div>
			
		</div>
	)
}

export default HomePage