import './App.css' ;
import { UserProvider } from './context/UserContext';
import ResponsiveAppBar from './components/NavbarMUI';
import MyThemeProvider from './context/MyThemeContext';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import { SearchProvider } from './context/SearchContext';
import BackToTop from './components/BackToTop';

function App() {


  return (
    <>
    <MyThemeProvider>
      <UserProvider>
        <SearchProvider>
          <ResponsiveAppBar />
          <CssBaseline />
          <AppRoutes />
          <BackToTop />
          <Footer />
        </SearchProvider>
      </UserProvider>
      </MyThemeProvider>
    </>
  );
}

export default App