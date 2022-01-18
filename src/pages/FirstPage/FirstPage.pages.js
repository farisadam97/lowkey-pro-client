import './FirstPage.css'
import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import imgscrolldown from '../../images/scrolldown.svg';
import imgfeature from '../../images/650x700.png';
import imgsystemrequirement from '../../images/650x700.png';
import imgtestimonial1 from '../../images/Evan-Lahti.jpg';
import imgtestimonial2 from '../../images/Jada-Griffin.jpg';
import imgtestimonial3 from '../../images/Aaron-Williams.jpg';
import imgtwitter from '../../images/twitter.svg';
import imgnewsletter from '../../images/newsletter.jpg';

const FirstPage = () => {
	
    return (
		<div>
			<ResponsiveAppBar />
			<div class="section-home">
				<Container maxWidth="xl">
					<Typography textAlign="center" color="white" variant="h1"
						paddingTop={{
							lg: 20,
							md: 20,
							sm: 20,
							xs: 10
						}}
						fontSize={{
							lg: 70,
							md: 50,
							sm: 40,
							xs: 30
						}}
					>
						LOWKEY GAME
					</Typography>
					<Typography textAlign="center" color="white" variant="h4"
						paddingTop={{
							lg: 0,
							md: 0,
							sm: 2,
							xs: 2
						}}
						fontSize={{
							lg: 30,
							md: 30,
							sm: 20,
							xs: 15
						}}
					>Experience new traditional game play</Typography>
					<div class="section-home-button">
						<Link to="/game-list" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'20px 50px'}}>Play Now</Button></Link>
					</div>
				</Container>
			</div>
			<div class="section-home-arrow">
				<Link to="/game-list" style={{ textDecoration: 'none' }}>
					<Typography color="white" variant="h6"
						fontSize={{
							lg: 15,
							md: 15,
							sm: 12,
							xs: 12
						}}
					>
						THE STORY
					</Typography>
					<img src={imgscrolldown} alt="Scroll Down"/>
				</Link>
			</div>
			<div class="section-feature">
				<Container maxWidth="xl">
					<div class="mobile-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
						<div><img src={imgfeature} alt="Feature"/></div>
						<div class="mobile-padding-top-50">
							<Typography color="white" variant="h6"
								fontSize={{
									lg: 20,
									md: 20,
									sm: 15,
									xs: 15
								}}
							>
								What's so special?
							</Typography>
							
							<Typography color="white" variant="h3"
								paddingTop={2}
								fontSize={{
									lg: 50,
									md: 40,
									sm: 30,
									xs: 20
								}}
							>
								FEATURES
							</Typography>
							
							<Typography color="white" variant="h4"
								paddingTop={{
									lg: 10,
									md: 10,
									sm: 2,
									xs: 2
								}}
								fontSize={{
									lg: 40,
									md: 30,
									sm: 20,
									xs: 15
								}}
							>
								Lorem Ipsum
							</Typography>
							
							<Typography color="white" 
								fontSize={{
									lg: 24,
									md: 20,
									sm: 16,
									xs: 12
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum imperdiet ligula, a fermentum eros elementum et. 
							</Typography>
							
							
							<Typography color="white" variant="h4"
								paddingTop={{
									lg: 10,
									md: 10,
									sm: 2,
									xs: 2
								}}
								fontSize={{
									lg: 40,
									md: 30,
									sm: 20,
									xs: 15
								}}
							>
								Lorem Ipsum
							</Typography>
							
							<Typography color="white" 
								fontSize={{
									lg: 24,
									md: 20,
									sm: 16,
									xs: 12
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum imperdiet ligula, a fermentum eros elementum et. 
							</Typography>
						</div>
					</div>
				</Container>
			</div>
			
			<div class="section-system-requirement">
				<Container maxWidth="xl">
					<div class="mobile-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
						<div>
							<Typography color="white" variant="h3"
								fontSize={{
									lg: 50,
									md: 40,
									sm: 30,
									xs: 20
								}}
							>
								SYSTEM <br />REQUIREMENTS
							</Typography>
							<br />
							<img src={imgsystemrequirement} alt="System Requirement"/>
						</div>
					</div>
				</Container>
			</div>
			
			<div class="section-top-score">
				<Container maxWidth="xl">
					<div class="mobile-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 120 }}>
						<div>
							<Typography color="white" variant="h3" 
								paddingTop={{
									lg: 28,
									md: 28,
									sm: 0,
									xs: 0
								}}
								fontSize={{
									lg: 50,
									md: 40,
									sm: 30,
									xs: 20
								}}
							>
								TOP SCORES
							</Typography>
							<Typography color="white" 
								fontSize={{
									lg: 24,
									md: 20,
									sm: 16,
									xs: 12
								}}
							>
								This top score from various games provided on this platform
							</Typography>
							
							<br /> <br />
							<Link to="/top-score" style={{ textDecoration: 'none' }}><Button variant="contained" style={{width:'100%',padding:'10px',maxWidth:'300px'}}>See More</Button></Link>
							
						</div>
						<div class="mobile-padding-top-50">
							<div class="card mb-4 card1">
								<div class="card-body">
									<div class="card-col-1">
										<img class="section-person-img" src={imgtestimonial1} alt="Testimonial 1"/>
									</div>
									<div class="card-col-2">
										<Typography color="orange" 
											fontSize={{
												lg: 24,
												md: 20,
												sm: 16,
												xs: 12
											}}
										>
											Evan Lahti
										</Typography>
										<Typography color="white" style={{ opacity: "0.5"}}
											fontSize={{
												lg: 20,
												md: 18,
												sm: 14,
												xs: 11
											}}
										>
											PC Gamer
										</Typography>
									</div>
									<div class="card-col-3">
										<Link to="https://twitter.com/" style={{ textDecoration: 'none' }} target="_blank"><img src={imgtwitter} alt="Twitter"/></Link>
									</div>
									<div style={{clear:"both"}}></div>
									<Typography paddingTop={2} color="white" 
										fontSize={{
											lg: 20,
											md: 18,
											sm: 14,
											xs: 11
										}}
									>
										“One of my gaming highlights of the year.”
									</Typography>
									<Typography paddingTop={1} color="white" style={{ opacity: "0.5"}}
										fontSize={{
											lg: 16,
											md: 16,
											sm: 12,
											xs: 10
										}}
									>
										June 18, 2021
									</Typography>
								</div>
							</div>
							<div class="card mb-4 card2">
								<div class="card-body">
									<div class="card-col-1">
										<img class="section-person-img" src={imgtestimonial2} alt="Testimonial 1"/>
									</div>
									<div class="card-col-2">
										<Typography color="orange" 
											fontSize={{
												lg: 24,
												md: 20,
												sm: 16,
												xs: 12
											}}
										>
											Jada Griffin
										</Typography>
										<Typography color="white" style={{ opacity: "0.5"}}
											fontSize={{
												lg: 20,
												md: 18,
												sm: 14,
												xs: 11
											}}
										>
											Nerdreactor
										</Typography>
									</div>
									<div class="card-col-3">
										<Link to="https://twitter.com/" style={{ textDecoration: 'none' }} target="_blank"><img src={imgtwitter} alt="Twitter"/></Link>
									</div>
									<div style={{clear:"both"}}></div>
									<Typography paddingTop={2} color="white" 
										fontSize={{
											lg: 20,
											md: 18,
											sm: 14,
											xs: 11
										}}
									>
										“The next big thing in the world of streaming and survival games.”
									</Typography>
									<Typography paddingTop={1} color="white" style={{ opacity: "0.5"}}
										fontSize={{
											lg: 16,
											md: 16,
											sm: 12,
											xs: 10
										}}
									>
										July 10, 2021
									</Typography>
								</div>
							</div>
							<div class="card card3">
								<div class="card-body">
									<div class="card-col-1">
										<img class="section-person-img" src={imgtestimonial3} alt="Testimonial 1"/>
									</div>
									<div class="card-col-2">
										<Typography color="orange" 
											fontSize={{
												lg: 24,
												md: 20,
												sm: 16,
												xs: 12
											}}
										>
											Aaron Williams
										</Typography>
										<Typography color="white" style={{ opacity: "0.5"}}
											fontSize={{
												lg: 20,
												md: 18,
												sm: 14,
												xs: 11
											}}
										>
											Uproxx
										</Typography>
									</div>
									<div class="card-col-3">
										<Link to="https://twitter.com/" style={{ textDecoration: 'none' }} target="_blank"><img src={imgtwitter} alt="Twitter"/></Link>
									</div>
									<div style={{clear:"both"}}></div>
									<Typography paddingTop={2} color="white" 
										fontSize={{
											lg: 20,
											md: 18,
											sm: 14,
											xs: 11
										}}
									>
										“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”
									</Typography>
									<Typography paddingTop={1} color="white" style={{ opacity: "0.5"}}
										fontSize={{
											lg: 16,
											md: 16,
											sm: 12,
											xs: 10
										}}
									>
										December 24, 2018
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
			
			<div class="section-newsletter">
				<Container maxWidth="xl">
					<div class="mobile-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
						<div style={{ textAlign: "center" }}><img src={imgnewsletter} alt="Newsletter"/></div>
						<div>
							<Typography color="white" variant="h6"
								paddingTop={10}
								fontSize={{
									lg: 20,
									md: 20,
									sm: 15,
									xs: 15
								}}
							>
								Want to stay in touch?
							</Typography>
							
							<Typography color="white" variant="h3"
								paddingTop={2}
								fontSize={{
									lg: 50,
									md: 40,
									sm: 30,
									xs: 20
								}}
							>
								NEWSLETTER SUBSCRIBE
							</Typography>
							
							<Typography color="white" 
								paddingTop={5}
								fontSize={{
									lg: 24,
									md: 20,
									sm: 16,
									xs: 12
								}}
							>
								In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
							</Typography>
							<br />
							<input
								type="text" style={{padding:'12px 40px'}} placeholder="Your Email"
							/>
							<Button variant="contained" style={{padding:'10px 40px'}}>Subscribe Now</Button>
							
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default FirstPage