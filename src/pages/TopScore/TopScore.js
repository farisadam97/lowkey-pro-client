import './TopScore.css'
import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Users from "../../components/TopScore/users.component";

const TopScore = () => {
    return (
		<div>
			<ResponsiveAppBar />
			
			<div className="page-top-score">
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
						
						<div className="tableleaderboardhead" style={{ borderBottom:"1px solid black", paddingTop:"50px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
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
						
						<div className="tableleaderboard">
							<Users />
						</div>
					</div>
				</Container>
			</div>
			
		</div>
	)
}

export default TopScore