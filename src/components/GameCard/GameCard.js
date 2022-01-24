import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const GameCard = (props) => {
    return(
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height:'100%', borderRadius:4 }}>
                <CardMedia
                    component="img"
                    alt=""
                    height="350"
                    src={props.image}
                />
                <CardContent sx={{px:3}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{px:3}}>
                    <Button variant="contained" sx={{width:"100%" , my:2}}>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to={props.link}>
                            Play Now!
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GameCard