import './App.css' ;
import { UserProvider } from './context/UserContext';
import ResponsiveAppBar from './components/NavbarMUI';
import MyThemeProvider from './context/MyThemeContext';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavMUI';
import { CssBaseline } from '@mui/material';

function App() {


  return (
    <>
    <MyThemeProvider>
      <UserProvider>
          <ResponsiveAppBar />
          <CssBaseline />
          <AppRoutes />
          <Footer />
          <BottomNavigation />
      </UserProvider>
      </MyThemeProvider>
    </>
  );
}

export default App