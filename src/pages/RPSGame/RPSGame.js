import './RPSGame.css'
import React,{useState} from 'react';

// Component
import { Gamecontainer } from '../../components/RPSGame/template/game-container/Gamecontainer.component';
import { Gamesection } from '../../components/RPSGame/template/game-section/Gamesection.component';
import { Info } from '../../components/RPSGame/template/info/Info.component';
import { Resultsection } from '../../components/RPSGame/template/resultsection/Resultsection.component';
import { Score } from '../../components/RPSGame/score/Score.component';
import { settings } from '../../components/RPSGame/config/game';
import { Message } from '../../components/RPSGame/message/Message.component';
import { Choice, Selection, ChoiceComputer, SelectionComputer } from '../../components/RPSGame/choice/Choice.component';

// End Component

import ResponsiveAppBar from "../../components/navbar/navbar.component";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import imgbatu from '../../images/batu.png';
import imgkertas from '../../images/kertas.png';
import imggunting from '../../images/gunting.png';
import imgrefresh from '../../images/refresh.png';
import trophy from '../../images/trophy.png';

const RPSGame = () => {
	let [game, setGame] = useState({
		userSelection: "",
		pcSelection: "",
		round: 0,
		userScore: 0,
		pcScore: 0,
		message: "",
	});
	
	const reset = () => {
		setGame({
		  ...game,
		  userSelection: "",
		  pcSelection: "",
		  round: 0,
		  userScore: 0,
		  pcScore: 0,
		  message: "",
		});
	};

	const { winMessage, tieMessage, lostMessage, winTarget } = settings;
 	const { pcScore, userScore } = game;

	 const play = (e) => {
		if (pcScore < winTarget) {
		  const userSelection = e.target.parentNode.getAttribute("value");
		  const pcSelection = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
	
		  userSelection === pcSelection
			? setGame({
				...(game.message = tieMessage),
			  })
			: (userSelection === "Rock" && pcSelection === "Scissors") || (userSelection === "Paper" && pcSelection === "Rock") || (userSelection === "Scissors" && pcSelection === "Paper")
			? setGame({
				...(game.userScore += 1),
				...(game.message = winMessage),
			  })
			: setGame({
				...(game.pcScore += 1),
				...(game.message = lostMessage),
			  });
	
		  setGame({
			...game,
			round: (game.round += 1),
			userSelection,
			pcSelection,
		  });
		}
	}; 
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
						<Gamecontainer>
							<Gamesection>
								<Info>
									<p className="headertitle">PLAYER 1 (<Score score={userScore} />)</p>
								</Info>
								<br/>
								<Selection {...game} trophyIcon={trophy}>
									<Choice {...game} value="Rock" id="rock" className="fas fa-hand-rock" onClick={play} choiceIcon={imgbatu} />
									<Choice {...game} value="Paper" id="paper" className="fas fa-hand-paper" onClick={play} choiceIcon={imgkertas} />
									<Choice {...game} value="Scissors" id="scissors" className="fas fa-hand-scissors" onClick={play} choiceIcon={imggunting} />
								</Selection>
							</Gamesection>

							<Resultsection>
								{/* <h1 style={{textAlign:"center" }}>ROUND</h1> */}
								<Message {...game} />
							</Resultsection>

							<Gamesection>
								<Info>
									<p className="headertitle">COM (<Score score={pcScore} />)</p>
								</Info>
								<br/>
								<SelectionComputer {...game} trophyIcon={trophy}>
									<ChoiceComputer {...game} id="comrock" className="fas fa-hand-rock" activeimg="activeimg" imgbatu={imgbatu} imgkertas={imgkertas} imggunting={imggunting}/>
									{/* <ChoiceComputer {...game} id="compaper" className="fas fa-hand-paper" activeimg="activeimg" choiceIcon={imgkertas}/>
									<ChoiceComputer {...game} id="comscissors" className="fas fa-hand-scissors" activeimg="activeimg" choiceIcon={imggunting}/> */}
								</SelectionComputer>
							</Gamesection>
						</Gamecontainer>
						<div className="divrefresh">
							<img src={imgrefresh} {...game} alt="Refresh" onClick={reset}/>
						</div>
			
					</div>
				</Container>
			</div>
		</div>
	)
}

export default RPSGame