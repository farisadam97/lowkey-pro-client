import './GameHistory.css'
import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import GameHistories from "../../components/GameHistories/game.histories.component";
import GameHistoriesStats from "../../components/GameHistories/game.histories.stats.component";

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
						<GameHistoriesStats />
						
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
							
						<div class="tablegamehistory">
							<GameHistories />
						</div>
					</div>
				</Container>
			</div>
			
		</div>
	)
}

export default GameHistory