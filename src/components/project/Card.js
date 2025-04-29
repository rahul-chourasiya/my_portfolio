import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cardproject = () => {

    return (
        <Card sx={{ maxWidth: 360 , margin:"5%",padding:"5%"}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height=""
                src={'https://png.pngtree.com/png-clipart/20210606/original/pngtree-3d-beauty-cosmetics-product-design-png-image_6391024.jpg'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Shop.org
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                -Developed an e-commerce website using React.js and Material-UI,
                 integrating free APIs to display product details across various categories such as
                 electronics, laptops, mobiles, and household goods. The project demonstrates the ability
                 to build dynamic and user-friendly web applications with seamless API integration.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Live preview</Button>
                <Button size="small"> Git-hube</Button>
            </CardActions>
        </Card>
    );
}
export default Cardproject;