import './RPSGame.css'

import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import imgbatu from '../../images/batu.png';
import imgkertas from '../../images/kertas.png';
import imggunting from '../../images/gunting.png';
import imgrefresh from '../../images/refresh.png';

import {refresh, game} from './RPSGame-script';

const RPSGame = () => {
    return (
		<div>
			<ResponsiveAppBar />
			<div className="page-game">
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
						<div className="game-container">
							<div className="game-section">
								<div className="info">
									<p className="headertitle">PLAYER 1 (<span id="playerScore">0</span>)</p>
								</div>
								<br/>
								<div className="selection">
									<img className="fas fa-hand-rock" id="rock" src={imgbatu} alt="Batu"/>
									<br/><br/>
									<img className="fas fa-hand-paper" id="paper" src={imgkertas} alt="Kertas"/>
									<br/><br/>
									<img className="fas fa-hand-scissors" id="scissors" src={imggunting} alt="Gunting"/>
								</div>
							</div>
							<div className="resultsection">
								<p id="vs">VS</p>
								<p className="result" id="result"></p>
							</div>
							<div className="game-section">
								<div className="info">
									<p className="headertitle">COM (<span id="computerScore">0</span>)</p>
								</div>
								<br/>
								<div className="show computer">
									<img className="fas fa-hand-rock" id="comrock" src={imgbatu} alt="Batu"/>
									<br/><br/>
									<img className="fas fa-hand-paper" id="compaper" src={imgkertas} alt="Kertas"/>
									<br/><br/>
									<img className="fas fa-hand-scissors" id="comscissors" src={imggunting} alt="Gunting"/>
								</div>
							</div>
						</div>
						<div className="divrefresh">
							<img src={imgrefresh} alt="Refresh" onClick={refresh}/>
						</div>
			
					</div>
				</Container>
			</div>
		</div>
	)
}

export default RPSGame