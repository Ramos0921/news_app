import { createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import './App.css';
import { NavBar } from './components/Nav';
import { Categories } from './components/Categories';
import { TopNews } from './components/TopNews';
import { SearchNews } from './components/SearchNews';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2AC3AD'
    }
  }
})



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="nav-header" style={{height: '64px'}}>
         <NavBar />
        </div>
        <Routes> 
            <Route exact path="/" element={<TopNews/>} />
            <Route exact path="/top-news" element={<TopNews/>} />
            <Route exact path="/categories" element={<Categories/>} />
            <Route exact path="/search-news" element={<SearchNews/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
