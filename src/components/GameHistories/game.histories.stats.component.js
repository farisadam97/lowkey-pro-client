import React, { Component } from 'react';
import Axios from 'axios';
import {baseURL} from '../../services/config.service';
import Typography from '@mui/material/Typography';

export default class GameHistoriesStats extends Component {

    constructor(props) {
        super(props);
        this.state = { gameHistoriesCollection: [] };
    }

    componentDidMount() {
		var currentuserid = localStorage.getItem('id')
        Axios.get(`${baseURL}/history/${currentuserid}`)
            .then(res => {
                this.setState({ gameHistoriesCollection: res.data.message });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
		
		const gameHistoriesToRender = this.state.gameHistoriesCollection
		//const numRows = gameHistoriesToRender.length
		var countwin = 0;
		var countlose = 0;
		var countdraw = 0;
		
		return (
		  <div>
			{
			  gameHistoriesToRender.map(
				(data, index) => {
				if (data.result === "WIN") {
					return countwin++;
				}
				else if (data.result === "LOSE") {
					return countlose++;
				}
				else {
					return countdraw++;
				}
			  })
			}
			<div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
				<div className="game-statistics-box">
					<Typography color="#03b345" fontWeight="bold"
						fontSize={{
							lg: 50,
							md: 50,
							sm: 40,
							xs: 30
						}}
					>
						{countwin}
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
				<div className="game-statistics-box">
					<Typography color="red" fontWeight="bold"
						fontSize={{
							lg: 50,
							md: 50,
							sm: 40,
							xs: 30
						}}
					>
						{countlose}
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
				<div className="game-statistics-box">
					<Typography fontWeight="bold"
						fontSize={{
							lg: 50,
							md: 50,
							sm: 40,
							xs: 30
						}}
					>
						{countdraw}
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
		  </div>
		)
    }
}