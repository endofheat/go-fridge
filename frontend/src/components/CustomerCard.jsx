import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from 'axios'
// import Grid from "@mui/material";

// wraps the default MUI Card component to customise it with props
export default function CustomCard({ title, children, buttonText = 'delete', itemID, tagID }) {
const setTheQuery = async() => {
    const item = await axios.delete (`http://localhost:8888/api/item/${itemID}`)
    console.log(item.data)
    const tag = await axios.delete (`http://localhost:8888/api/itemTag/${tagID}`)
    console.log(tag.data)
    };

  return (
/*     <Grid container spacing={4}>
        <Grid item xs={4}><Item> */
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={setTheQuery} size="small" color="primary">
          {buttonText}
        </Button>
      </CardActions>
    </Card>
/*     </Item></Grid>
    </Grid> */
  );
}
// ++ Add support for a button text prop as well, test rendering it