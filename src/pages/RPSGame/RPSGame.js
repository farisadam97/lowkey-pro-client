import './RPSGame.css'
import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import imgbatu from '../../images/batu.png';
import imgkertas from '../../images/kertas.png';
import imggunting from '../../images/gunting.png';
import imgrefresh from '../../images/refresh.png';

require('./RPSGame-script');

const RPSGame = () => {
    return (
		<div>
			<ResponsiveAppBar />
			
			<div class="page-game">
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
							Rock Paper Scissors
						</Typography>
						<div class="game-container">
							<div class="game-section">
								<div class="info">
									<p class="headertitle">PLAYER 1 (<span id="playerScore">0</span>)</p>
								</div>
								<br/>
								<div class="selection">
									<img class="fas fa-hand-rock" id="rock" src={imgbatu} alt="Batu"/>
									<br/><br/>
									<img class="fas fa-hand-paper" id="paper" src={imgkertas} alt="Kertas"/>
									<br/><br/>
									<img class="fas fa-hand-scissors" id="scissors" src={imggunting} alt="Gunting"/>
								</div>
							</div>
							<div class="resultsection">
								<p id="vs">VS</p>
								<p class="result" id="result"></p>
							</div>
							<div class="game-section">
								<div class="info">
									<p class="headertitle">COM (<span id="computerScore">0</span>)</p>
								</div>
								<br/>
								<div class="show computer">
									<img class="fas fa-hand-rock" id="comrock" src={imgbatu} alt="Batu"/>
									<br/><br/>
									<img class="fas fa-hand-paper" id="compaper" src={imgkertas} alt="Kertas"/>
									<br/><br/>
									<img class="fas fa-hand-scissors" id="comscissors" src={imggunting} alt="Gunting"/>
								</div>
							</div>
						</div>
						<div class="divrefresh">
							<img src={imgrefresh} alt="Refresh" onClick="refresh()"/>
						</div>
			
					</div>
				</Container>
			</div>
		</div>
	)
}

export default RPSGame