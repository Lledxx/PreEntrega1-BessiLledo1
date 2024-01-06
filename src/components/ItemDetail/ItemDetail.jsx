import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({equipo}) => {
    const {nombre, precio, descripcion, imagen} = equipo
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => alert(`cantidad agregada ${quantity}`)}/>
    </Card>
  );
}
export default ItemDetail