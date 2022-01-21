import './GameHistory.css'
import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const GameHistory = () => {
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
							Game History Detail
						</Typography>
						<Typography 
							fontSize={{
								lg: 24,
								md: 20,
								sm: 16,
								xs: 12
							}}
						>
							This is the history of the games you played
						</Typography>
						
						<br /><br />
						
						<div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
							<div class="game-statistics-box">
								<Typography color="#03b345" fontWeight="bold"
									fontSize={{
										lg: 50,
										md: 50,
										sm: 40,
										xs: 30
									}}
								>
									2
								</Typography>
								
								<Typography 
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									Win(s)
								</Typography>
							</div>
							<div class="game-statistics-box">
								<Typography color="red" fontWeight="bold"
									fontSize={{
										lg: 50,
										md: 50,
										sm: 40,
										xs: 30
									}}
								>
									1
								</Typography>
								
								<Typography 
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									Lose(s)
								</Typography>
							</div>
							<div class="game-statistics-box">
								<Typography fontWeight="bold"
									fontSize={{
										lg: 50,
										md: 50,
										sm: 40,
										xs: 30
									}}
								>
									1
								</Typography>
								
								<Typography 
									fontSize={{
										lg: 30,
										md: 30,
										sm: 20,
										xs: 14
									}}
								>
									Draw(s)
								</Typography>
							</div>
						</div>
						
						<div class="tableleaderboardhead" style={{ borderBottom:"1px solid black", paddingTop:"30px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
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
									Game
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
									Date / Time
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
									Result
								</Typography>
							</div>
						</div>
							
						<div class="tableleaderboard">
							<div class="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
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
										Rock Paper Scissor
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
										21 Jan 2022 8pm
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
										WIN
									</Typography>
								</div>
							</div>
							
							<div class="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
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
										Rock Paper Scissor
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
										21 Jan 2022 9pm
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
										LOSE
									</Typography>
								</div>
							</div>
							
							<div class="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
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
										Rock Paper Scissor
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
										22 Jan 2022 1am
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
										DRAW
									</Typography>
								</div>
							</div>
							
							
							<div class="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
								<div>
									<Typography 
										fontSize={{
											lg: 20,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										4
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
										Rock Paper Scissor
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
										22 Jan 2022 3am
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
										WIN
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

export default GameHistory