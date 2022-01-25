import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GameCard from '../../components/GameCard/GameCard';
import './GameList.css'
// import { styled } from '@mui/system';
import ResponsiveAppBar from '../../components/navbar/navbar.component';




const GameList = () => {

    const gameListItem = [
        {
            title: "Rock Paper Scissor",
            description:"A well known traditional games from entire world that could ruin your friendship with your bestfriend",
            image:"/images/RPSgame.jpeg",
            link:"/rps-game"
        }
    ]
    
    return(
        <div className='main-page'>
            <ResponsiveAppBar />
            <Container  maxWidth="xl" sx={{px:2,pt:8}}>
                <Typography variant="h2" align="center" sx={{ fontWeight: 'bold',color:'whitesmoke', }}>
                    Our Games List
                </Typography>
                <Grid container spacing={6} sx={{mt:2}}>
                    {
                        gameListItem.map((item,index) => (
                            <GameCard
                                key={index} 
                                title={item.title} 
                                description={item.description}
                                image={item.image}
                                link={item.link}
                            />
                        ))
                    }
                    
                </Grid>
            </Container>
        </div>
    )
}

export default GameList 