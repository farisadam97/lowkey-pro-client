import './TopScore.css'
import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const TopScore = () => {
    return (
		<div>
			<ResponsiveAppBar />
			
			<div class="page-top-score">
				<Container maxWidth="xl">
					<div>
						<Typography variant="h3"
							fontSize={{
								lg: 50,
								md: 40,
								sm: 30,
								xs: 20
							}}
						>
							List Top Scores
						</Typography>
						<Typography 
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
						
						<div class="tableleaderboardhead" style={{ borderBottom:"1px solid black", paddingTop:"50px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
							<div>
								<Typography variant="h3"
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									No
								</Typography>
							</div>
							<div>
								<Typography variant="h3"
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									Name
								</Typography>
							</div>
							<div>
								<Typography variant="h3"
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									Email
								</Typography>
							</div>
							<div>
								<Typography variant="h3"
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									Username
								</Typography>
							</div>
							<div>
								<Typography variant="h3"
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									City
								</Typography>
							</div>
							<div>
								<Typography variant="h3"
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									Score
								</Typography>
							</div>
						</div>
							
						<div class="tableleaderboard">
							<div class="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										1
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Abc
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										abc@gmail.com
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										abctest
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Jakarta
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										200
									</Typography>
								</div>
							</div>
							
							<div class="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										2
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Xyz
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										xyz@gmail.com
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										xyztest
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Bali
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										120
									</Typography>
								</div>
							</div>
							
							<div class="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										3
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Def
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										def@outlook.com
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										deftest
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Surabaya
									</Typography>
								</div>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										110
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
			
		</div>
	)
}

export default TopScore