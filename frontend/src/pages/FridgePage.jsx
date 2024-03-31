import { ThemeProvider, Typography } from "@mui/material";
import { ResponsiveFont } from "../themes/responsiveFontTheme";
import fridge from '../assets/fridge.png';
import CustomCard from '../components/CustomerCard'

export default function FridgePage() {
    // const [items, setItem] = useState([]);
    useEffect(() => {
        // console.log(currentResult)
      axios.get(`http://localhost:8888/api/item`)
        .then(response => {
            setItem(response.data.data)
        })
    })
    
  return (
    <div className="FridgePage">
      <ThemeProvider theme={ResponsiveFont}>
        <Typography variant="h1">
          Welcome to Go Fridge 
        </Typography>
        <Typography variant="h3">
          the only fridge management app you will ever need.
        </Typography>
        <img src = {fridge} width = "50%" height = "50%" alt = 'A opened fridge. '/>
      </ThemeProvider>
    </div>
  );
}