import React, { Component } from 'react';
import Axios from 'axios';
import {baseURL} from '../../services/config.service';
import Typography from '@mui/material/Typography';
import trophyIcon from '../../images/trophy.png';
import { Fragment } from 'react' // react version > 16.0

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        Axios.get(`${baseURL}/players`)
            .then(res => {
                this.setState({ usersCollection: res.data.message });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.sort((a, b) => a.total_score < b.total_score ? 1:-1).map((data, i) => {
			var img = "";
			if (i === 0) {
				img = (<Fragment><img src={trophyIcon} className='trophyicon' alt='trophy' /></Fragment>);
			}
			return (
				<div key={i} className="tableleaderboardrow" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 20 }}>
					<div>
						<Typography 
							fontSize={{
								lg: 20,
								md: 20,
								sm: 16,
								xs: 12
							}}
						>
							{i+1}
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
							{data.name} {img}
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
							{data.email}
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
							{data.username}
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
							{data.city}
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
							{data.total_score}
						</Typography>
					</div>
				</div>
			);
        });
    }

    render() {
        return (
			<div>
				{this.dataTable()}
            </div>
        )
    }
}