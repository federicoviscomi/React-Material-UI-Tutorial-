import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const MuiCard = () => {
    return (
        (<Box sx={{
            width: '300px'
        }}>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image={require('./img.png')}
                    alt='unsplash image'>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' sx={{
                        color: 'text.secondary'
                    }}>
                        React is a javasciprt library asdf ....
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn more</Button>
                </CardActions>
            </Card>
        </Box>)
    );
};